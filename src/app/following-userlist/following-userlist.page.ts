import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { computeStackId } from '@ionic/angular/directives/navigation/stack-utils';
import { userInfo } from 'os';
import { APIService, ModelSortDirection, Userinfo } from '../API.service';
import { ResponsibleService } from '../shared/services/responsible.service';

@Component({
  selector: 'app-following-userlist',
  templateUrl: './following-userlist.page.html',
  styleUrls: ['./following-userlist.page.scss'],
})
export class FollowingUserlistPage implements OnInit {
  public followees: Array<Userinfo> = [];
  public followers: Array<Userinfo> = [];
  private limit: number = 10;
  private followeeNextToken: string = null;
  private followerNextToken: string = null;
  public segmentValue: "followees" | "followers" = "followees";

  constructor(
    private api: APIService,
    private route: ActivatedRoute,
    public responsibleService: ResponsibleService,
  ) { }

  /**
   * usernameの取得
   * followees,followersの取得と整形
   *
   * @memberof FollowingUserlistPage
   */
  async ngOnInit() {
    const username = this.route.snapshot.params["username"];
    this.segmentValue = this.route.snapshot.params["segment"];
    [this.followees, this.followeeNextToken] = await this.api.ListFollowingRelationshipByFollower(username, null, ModelSortDirection.DESC, null, this.limit, this.followeeNextToken)
      .then(e => {
        const followees = e.items.map(followingRelationship => {
          if (followingRelationship.followee) {
            return followingRelationship.followee;
          } else {
            const userInfoObj: Userinfo = {
              __typename: "Userinfo",
              userId: followingRelationship.followeeId,
            }
            return userInfoObj;
          }
        });
        return [followees, e.nextToken];
      });

    [this.followers, this.followerNextToken] = await this.api.ListFollowingRelationshipByFollowee(username, null, ModelSortDirection.DESC, null, this.limit, this.followerNextToken)
      .then(e => {
        const followers = e.items.map(followingRelationship => {
          if (followingRelationship.follower) {
            return followingRelationship.follower;
          } else {
            const userInfoObj: Userinfo = {
              __typename: "Userinfo",
              userId: followingRelationship.followerId,
            }
            return userInfoObj;
          }
        });
        return [followers, e.nextToken];
      });
  }

  /**
   * icon-segmentの切り替えを行う
   *
   * @param {*} event
   * @memberof FollowingUserlistPage
   */
  segmentChanged(event) {
    this.segmentValue = event.target.value;
  }

}
