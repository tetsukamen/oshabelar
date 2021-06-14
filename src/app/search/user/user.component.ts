import { Component, OnInit } from '@angular/core';
import { APIService, Userinfo } from 'src/app/API.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  public users: Userinfo[] = [];

  constructor(
    private api: APIService,
  ) { }

  async ngOnInit() {
    this.users = await this.api.ListUserinfos().then(e => e.items);
  }
}
