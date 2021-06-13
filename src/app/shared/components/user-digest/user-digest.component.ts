import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { APIService, Userinfo } from 'src/app/API.service';
import { AuthService } from '../../services/auth.service';
import { FollowingRelationshipsService } from '../../services/following-relationships.service';

@Component({
  selector: 'app-user-digest',
  templateUrl: './user-digest.component.html',
  styleUrls: ['./user-digest.component.scss'],
})
export class UserDigestComponent implements OnInit {
  @Input()
  userInfo: Userinfo;
  private followees: Userinfo[];
  public isFollowing: boolean = false;

  constructor(
    private followingRelationshipService: FollowingRelationshipsService,
    private api: APIService,
    private authService: AuthService,
    private router: Router,
  ) { }

  async ngOnInit() {
    this.followees = await this.followingRelationshipService.getFollowees();
    this.isFollowing = this.followees.some(followee => followee.userId == this.userInfo.userId);
  }

  public async toggleFollowingRelationship() {
    const currentUsername = await this.authService.getUser().then(e => e.getUsername());
    if (!this.isFollowing) {
      const input = {
        followeeId: this.userInfo.userId,
        followerId: currentUsername,
        timestamp: Math.floor(Date.now() / 1000),
      }
      this.api.CreateFollowRelationship(input);
    } else {
      const input = {
        followeeId: this.userInfo.userId,
        followerId: currentUsername,
      }
      this.api.DeleteFollowRelationship(input);
    }
    this.isFollowing = !this.isFollowing;
  }

  public goToProfilePage() {
    this.router.navigate(['/profile', this.userInfo.userId]);
  }

}
