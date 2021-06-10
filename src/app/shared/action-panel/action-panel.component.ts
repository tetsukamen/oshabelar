import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Oshaberi } from 'src/app/API.service';

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

  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
    if (this.oshaberi.like) {
      this.likeAmount = this.oshaberi.like.items.length;
    }
    if (this.oshaberi.replyOshaberi) {
      this.replyAmount = this.oshaberi.replyOshaberi.items.length;
    }
  }

  likeIconName(isLike: boolean): string {
    return isLike ? "heart" : "heart-outline";
  }

  like(): void {
    this.isLike = !this.isLike;
    if (this.isLike) {
      this.likeAmount++;
    } else {
      this.likeAmount--;
    }
  }

  reply(): void {
    this.router.navigate(['/create-oshaberi', { parentOshaberiId: this.oshaberi.id }]);
  }

}
