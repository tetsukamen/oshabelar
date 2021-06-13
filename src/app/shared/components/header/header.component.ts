import { Location } from '@angular/common';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { APIService, Userinfo } from 'src/app/API.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() iconType: 'menu' | 'back';
  @Input() title: string = null;
  @Input() buttonText: string = null;
  @Input() buttonDisabled: boolean = false;
  @Output() buttonClicked: EventEmitter<boolean> = new EventEmitter();
  @Output() searchText: EventEmitter<string> = new EventEmitter();
  public userInfo: Userinfo;

  constructor(
    private location: Location,
    private authService: AuthService,
    private api: APIService,
    private menu: MenuController,
  ) { }

  async ngOnInit() {
    const username = await this.authService.getUser().then(e => e.getUsername());
    this.userInfo = await this.api.GetUserinfo(username);
  }

  openMenu(): void {
    this.menu.open();
  }

  goBack(): void {
    this.location.back();
  }

  sendButtonClickEvent() {
    this.buttonClicked.emit(true);
  }

}
