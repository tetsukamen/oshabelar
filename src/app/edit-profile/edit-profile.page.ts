import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { APIService, Userinfo } from '../API.service';
import { AuthService } from '../shared/services/auth.service';
import { FileReaderEx } from '../shared/classes/file-reader-ex';
import { MessageService } from '../shared/message.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Storage } from 'aws-amplify';
import { Location } from '@angular/common';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.page.html',
  styleUrls: ['./edit-profile.page.scss'],
})
export class EditProfilePage implements OnInit {
  public userInfo: Userinfo = null;
  private currentUsername: string;
  public newCoverImageSrc = null;
  public newIconImageSrc = null;
  public profileForms: FormGroup;
  public nickname = new FormControl('', [Validators.maxLength(30)]);
  public profileText = new FormControl('', [Validators.maxLength(200)]);
  private coverImageObj: File = null;
  private iconImageObj: File = null;
  private level: string = "public";
  public uploadProgressRate: number = 0;

  @ViewChild('inputCoverImage')
  private inputCoverImageRef: ElementRef;
  @ViewChild('inputIconImage')
  private inputIconImageRef: ElementRef;

  constructor(
    private authService: AuthService,
    private api: APIService,
    private messageService: MessageService,
    private fb: FormBuilder,
    private location: Location,
  ) { }

  async ngOnInit() {
    this.currentUsername = (await this.authService.getUser()).getUsername();
    this.userInfo = await this.api.GetUserinfo(this.currentUsername);
    this.profileForms = this.fb.group({
      nickname: [this.userInfo && this.userInfo.nickname ? this.userInfo.nickname : '', Validators.maxLength(30)],
      profile: [this.userInfo && this.userInfo.profile ? this.userInfo.profile : '', Validators.maxLength(200)],
      coverImageKey: [this.userInfo && this.userInfo.coverImageKey ? this.userInfo.coverImageKey : ''],
      iconImageKey: [this.userInfo && this.userInfo.iconImageKey ? this.userInfo.iconImageKey : ''],
    });
  }

  async updateProfile() {
    this.uploadProgressRate = 0.1;
    const uploadImages = await this.uploadImages().catch(_ => {
      this.messageService.indicateWarning('画像のアップロードに失敗しました');
    });
    this.uploadProgressRate = 0.5;
    let uploadProfile;
    if (uploadImages) {
      uploadProfile = await this.uploadProfile().catch(_ => {
        this.messageService.indicateWarning('プロフィールの更新に失敗しました');
      });
    }
    if (uploadProfile) {
      this.uploadProgressRate = 1;
      this.messageService.indicateSuccess('プロフィールを更新しました');
      setTimeout(() => {
        this.location.back();
      }, 300);
    }
  }

  async uploadProfile() {
    const input = this.profileForms.value;
    input.userId = this.currentUsername;
    console.log(input)
    if (this.userInfo) {
      await this.api.UpdateUserInfo(input);
    } else {
      await this.api.CreateUserInfo(input);
    }
    return true;
  }

  async uploadImages() {
    if (this.coverImageObj) {
      await this.uploadSingleImage(this.profileForms.get('coverImageKey').value, this.coverImageObj, this.level);
    }
    if (this.iconImageObj) {
      await this.uploadSingleImage(this.profileForms.get('iconImageKey').value, this.iconImageObj, this.level);
    }
    return true;
  }

  async onImageSelected(event, type: string) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      // get extention
      const fileName = file.name.split('.')[0];
      const fileType = file.type;
      const extention = fileType.split('/')[1];
      const timestamp = Math.floor(Date.now() / 1000);
      // set key
      const key = `${this.currentUsername}${timestamp}${fileName}.${extention}`;
      // display preview
      const imageSrc = await new FileReaderEx().readAsDataURL(file).catch(_ => {
        this.messageService.indicateWarning('画像の読み込みに失敗しました')
      });
      if (type == 'cover') {
        this.newCoverImageSrc = imageSrc;
        this.profileForms.get('coverImageKey').setValue(key);
        this.coverImageObj = file;
      } else {
        this.newIconImageSrc = imageSrc;
        this.profileForms.get('iconImageKey').setValue(key);
        this.iconImageObj = file;
      }
    }
  }

  async browseFile(type: string) {
    if (type == 'cover') {
      this.inputCoverImageRef.nativeElement.click();
    } else {
      this.inputIconImageRef.nativeElement.click();
    }
  }

  async uploadSingleImage(key: string, fileObj: File, level: string): Promise<string> {
    await Storage.put(key, fileObj, {
      level: level,
    });
    return key;
  }

}
