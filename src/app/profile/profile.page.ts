import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { APIService, FollowingRelationship, Like, ModelSortDirection, Oshaberi, Userinfo } from '../API.service';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  public username: string;
  private currentUsername: string;
  public userInfo: Userinfo;
  public isMyProfile: boolean = false;
  public segmentValue: string = "oshaberi";
  public oshaberis: Array<Oshaberi> = [];
  private oshaberiNextToken: string = null;
  public likes: Array<Like> = [];
  private likeNextToken: string = null;
  private limit: number = 10;
  public isFollowing: boolean = false;
  public followeesRelationships: FollowingRelationship[];
  public followersRelationships: FollowingRelationship[];

  constructor(
    public route: ActivatedRoute,
    private router: Router,
    private api: APIService,
    private authService: AuthService,
  ) { }

  async ngOnInit() {
    this.username = await this.route.snapshot.params['username'];
    this.userInfo = await this.api.GetUserinfo(this.username);
    // jadge if this is my profile page
    this.currentUsername = (await this.authService.getUser()).getUsername();
    if (this.currentUsername == this.username) {
      this.isMyProfile = true;
    }
    [this.oshaberis, this.oshaberiNextToken] = await this.getOwnerOshaberisAndNextToken(this.username, this.limit, this.oshaberiNextToken);
    [this.likes, this.likeNextToken] = await this.getOwnerLikesAndNextToken(this.username, this.limit, this.likeNextToken);
    // jadge if is following
    this.isFollowing = await this.api.GetFollowingRelationship(this.username, this.currentUsername).then(e => !!e);
    // get following relationships
    this.followeesRelationships = await this.api.ListFollowingRelationshipByFollower(this.username, null, ModelSortDirection.DESC).then(e => e.items);
    this.followersRelationships = await this.api.ListFollowingRelationshipByFollowee(this.username, null, ModelSortDirection.DESC).then(e => e.items);
  }

  public goToEditProfilePage(): void {
    this.router.navigate(['/edit-profile']);
  }

  public segmentChange(event): void {
    this.segmentValue = event.target.value;
  }


  async loadNextOshaberis(event) {
    if (this.oshaberiNextToken) {
      let nextOshaberis: Array<Oshaberi>;
      [nextOshaberis, this.oshaberiNextToken] = await this.getOwnerOshaberisAndNextToken(this.username, this.limit, this.oshaberiNextToken);
      event.target.complete(); // terminate animation
      this.oshaberis = [...this.oshaberis, ...nextOshaberis];
      // stop loading next if no next oshaberis or number of oshaberi items exceeds 300
      if (this.oshaberiNextToken == null || this.oshaberis.length > 300) {
        event.target.disabled = true;
      }
    } else {
      event.target.disabled = true;
    }
  }

  // returns next oshaberis and updated nextToken
  async getOwnerOshaberisAndNextToken(username: string, limit: number, nextToken: string): Promise<Array<any>> {
    return this.api.ListOshaberisBySpecificOwner(username, null, ModelSortDirection.DESC, null, limit, nextToken,).then(e => {
      return [e.items, e.nextToken];
    });
  }

  async loadNextLikes(event) {
    if (this.likeNextToken) {
      let nextLikes: Array<Like>;
      [nextLikes, this.likeNextToken] = await this.getOwnerLikesAndNextToken(this.username, this.limit, this.likeNextToken);
      event.target.complete(); // terminate animation
      this.likes = [...this.likes, ...nextLikes];
      // stop loading next if no next oshaberis or number of oshaberi items exceeds 300
      if (this.likeNextToken == null || this.likes.length > 300) {
        event.target.disabled = true;
      }
    } else {
      event.target.disabled = true;
    }
  }

  // return nest likes and update nextToken  
  async getOwnerLikesAndNextToken(username: string, limit: number, nextToken: string): Promise<Array<any>> {
    return this.api.ListLikesBySpecificUserId(username, null, ModelSortDirection.DESC, null, limit, nextToken,).then(e => {
      return [e.items, e.nextToken];
    })
  }

  toggleFollowingRelationship() {
    if (!this.isFollowing) {
      const input = {
        followeeId: this.username,
        followerId: this.currentUsername,
        timestamp: Math.floor(Date.now() / 1000),
      }
      this.api.CreateFollowRelationship(input);
    } else {
      const input = {
        followeeId: this.username,
        followerId: this.currentUsername,
      }
      this.api.DeleteFollowRelationship(input);
    }
    this.isFollowing = !this.isFollowing;
  }
}
