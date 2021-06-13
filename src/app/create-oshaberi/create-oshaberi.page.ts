import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../shared/services/auth.service';
import { Location } from '@angular/common';
import { CreateOshaberiService } from './create-oshaberi.service';
import { FileReaderEx } from '../shared/classes/file-reader-ex';
import { ActivatedRoute } from '@angular/router';
import { MessageService } from '../shared/services/message.service';

@Component({
  selector: 'app-create-oshaberi',
  templateUrl: './create-oshaberi.page.html',
  styleUrls: ['./create-oshaberi.page.scss'],
})
export class CreateOshaberiPage implements OnInit {
  username: string;
  oshaberiContent = new FormControl('', [Validators.required, Validators.maxLength(140)]);
  images: Array<FormGroup> = [];
  maxContentLength: number = 140;
  contentLength: number = 0;
  contentLengthColor: 'danger' | '' = '';
  buttonDisabled: boolean = true;
  imageAuthLevel: string = 'public';
  uploadProgressRate: number = 0;
  parentOshaberiId: string;

  @ViewChild('inputImage')
  private inputImageRef: ElementRef;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private location: Location,
    private createOshaberiService: CreateOshaberiService,
    private messageService: MessageService,
    private route: ActivatedRoute,
  ) { }

  async ngOnInit() {
    this.username = await this.authService.getUser().then(e => e.getUsername());
    this.parentOshaberiId = this.route.snapshot.params['parentOshaberiId'];
    this.oshaberiContent.valueChanges.subscribe(e => {
      this.contentLength = e.length;
      this.contentLengthColor = e.length >= 140 ? 'danger' : '';
      this.buttonDisabled = !!this.oshaberiContent.errors;
    });
  }

  async createOshaberi() {
    this.uploadProgressRate += 0.01;
    const imageKeys = await this.createOshaberiService.uploadImages(this.images, this.imageAuthLevel).catch(_ => {
      this.messageService.indicateWarning('画像のアップロードに失敗しました');
      return [''];
    });
    this.uploadProgressRate = 0.5;
    let createOshaberi;
    if (imageKeys) {
      createOshaberi = await this.createOshaberiService.uploadOshaberi(this.oshaberiContent.value, imageKeys, this.parentOshaberiId).catch(_ => {
        this.messageService.indicateWarning('おしゃべりの投稿に失敗しました');
      });
    }
    if (createOshaberi) {
      this.uploadProgressRate = 1;
      this.messageService.indicateSuccess('投稿しました');
      setTimeout(() => {
        this.location.back();
      }, 300);
    }
  }

  browseFiles() {
    this.inputImageRef.nativeElement.click();
  }

  async onImageSelected(event) {
    const selectedImagesAmount = event.target.files.length;
    // check total number of image
    if (selectedImagesAmount + this.images.length > 5) {
      this.messageService.indicateWarning('添付可能な画像は最大5つです');
    } else if (selectedImagesAmount > 0) {
      for (let file of event.target.files) {
        // get extention
        const fileName = file.name.split('.')[0];
        const fileType = file.type;
        const extention = fileType.split('/')[1];
        const timestamp = Math.floor(Date.now() / 1000);
        // set key
        const key = `${this.username}${timestamp}${fileName}.${extention}`;
        const fileObj = file;
        // display preview
        const imageSrc = await new FileReaderEx().readAsDataURL(file).catch(_ => {
          this.messageService.indicateWarning('画像の読み込みに失敗しました')
        });
        // set image info
        this.images.push(this.fb.group({
          'key': key,
          'fileObj': fileObj,
          'imageSrc': imageSrc,
        }));
      }
    }
  }

  removeSelectedImage(i: number) {
    this.images.splice(i, 1);
  }

}