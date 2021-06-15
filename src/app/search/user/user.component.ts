import { Component, OnInit } from '@angular/core';
import { APIService, Userinfo } from 'src/app/API.service';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  public users: Userinfo[] = [];

  constructor(
    private api: APIService,
    private authService: AuthService,
  ) { }

  async ngOnInit() {
    const username = (await this.authService.getUser()).getUsername();
    this.users = await this.api.ListUserinfos().then(e => {
      const users = e.items.filter(userInfo => userInfo.userId !== username);
      return users;
    });
  }
}
