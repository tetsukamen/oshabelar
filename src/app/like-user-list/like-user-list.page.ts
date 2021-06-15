import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { APIService, Oshaberi, Userinfo } from '../API.service';
import { ResponsibleService } from '../shared/services/responsible.service';

@Component({
  selector: 'app-like-user-list',
  templateUrl: './like-user-list.page.html',
  styleUrls: ['./like-user-list.page.scss'],
})
export class LikeUserListPage implements OnInit {
  public oshaberi: Oshaberi;
  public likeUsers: Userinfo[];

  constructor(
    public route: ActivatedRoute,
    private api: APIService,
    public responsibleService: ResponsibleService,
  ) { }

  async ngOnInit() {
    const oshaberiId = this.route.snapshot.params['oshaberi-id'];
    this.oshaberi = await this.api.GetOshaberi(oshaberiId);
    this.likeUsers = this.oshaberi.like.items.map(like => {
      if (like.userInfo) {
        return like.userInfo;
      } else {
        const userInfoObj: Userinfo = {
          __typename: "Userinfo",
          userId: like.userId,
        }
        return userInfoObj;
      }
    });
  }

}
