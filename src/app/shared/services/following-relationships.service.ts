import { Injectable } from '@angular/core';
import { APIService, ModelSortDirection, Userinfo } from 'src/app/API.service';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class FollowingRelationshipsService {
  private _followees: Array<Userinfo> = null;
  private _followers: Array<Userinfo> = null;
  private username: string;

  constructor(
    private authService: AuthService,
    private api: APIService,
  ) { }


  /**
   * return followees
   *
   * @memberof FollowingRelationshipsService
   */
  public async getFollowees() {
    // get username if do not have
    if (!this.username) {
      this.username = await this.authService.getUser().then(e => e.getUsername());
    }
    // get followees if do not have
    if (this._followees == null) {
      this._followees = await this.api.ListFollowingRelationshipByFollower(this.username, null, ModelSortDirection.DESC).then(e => {
        return e.items.map(followingRelationship => {
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
      })
    }
    // return followees
    return this._followees;
  }

  public async getFollowers() {
    // get username if do not have
    if (!this.username) {
      this.username = await this.authService.getUser().then(e => e.getUsername());
    }
    // get followers if do not have
    if (this._followers == null) {
      this._followers = await this.api.ListFollowingRelationshipByFollowee(this.username, null, ModelSortDirection.DESC).then(e => {
        return e.items.map(followingRelationship => {
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
      })
    }
    // return followees
    return this._followers;
  }
}
