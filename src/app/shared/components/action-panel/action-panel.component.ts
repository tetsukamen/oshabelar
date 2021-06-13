import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { APIService, Oshaberi } from 'src/app/API.service';
import { OshaberiDetailService } from 'src/app/oshaberi-detail/oshaberi-detail.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-action-panel',
  templateUrl: './action-panel.component.html',
  styleUrls: ['./action-panel.component.scss'],
})
export class ActionPanelComponent implements OnInit {
  @Input()
  oshaberi: Oshaberi;
  @Input()
  showNumbers: boolean = true;
  public isLike: boolean = false;
  public likeAmount: number = 0;
  public replyAmount: number = 0;
  private currentUsername: string;

  constructor(
    private router: Router,
    private api: APIService,
    private authService: AuthService,
    private oshaberiDetailService: OshaberiDetailService,
  ) { }

  async ngOnInit() {
    this.currentUsername = (await this.authService.getUser()).getUsername();
    if (this.oshaberi.like && this.oshaberi.like.items) {
      const likes = this.oshaberi.like.items;
      this.likeAmount = likes.length;
      this.isLike = likes.some(like => like.userId == this.currentUsername);
    }
    if (this.oshaberi.replyOshaberi && this.oshaberi.replyOshaberi.items) {
      this.replyAmount = this.oshaberi.replyOshaberi.items.length;
    }
  }

  likeIconName(isLike: boolean): string {
    return isLike ? "heart" : "heart-outline";
  }

  async like() {
    this.isLike = !this.isLike;
    if (this.isLike) {
      this.likeAmount++;
      await this.createLike(this.oshaberi.id);
    } else {
      this.likeAmount--;
      await this.deleteLike(this.oshaberi.id);
    }
    this.oshaberiDetailService.likeClickedSubject.next(this.isLike);
  }

  async createLike(oshaberiId: string) {
    return await this.api.CreateLikeAndNotification(oshaberiId, 'like');
  }

  async deleteLike(oshaberiId: string) {
    const input = {
      userId: this.currentUsername,
      oshaberiId: oshaberiId,
    };
    return await this.api.DeleteLike(input);
  }

  reply(): void {
    this.router.navigate(['/create-oshaberi', { parentOshaberiId: this.oshaberi.id }]);
  }

}
