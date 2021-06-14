import { Component, Input, OnInit } from '@angular/core';
import { Notification } from 'src/app/API.service';

@Component({
  selector: 'app-notification-item',
  templateUrl: './notification-item.component.html',
  styleUrls: ['./notification-item.component.scss'],
})
export class NotificationItemComponent implements OnInit {
  @Input()
  notification: Notification;

  constructor() { }

  ngOnInit() {
    console.log(this.notification)
  }

  public getUserName(): string {
    return (this.notification.fromUser && this.notification.fromUser.nickname) ? this.notification.fromUser.nickname : this.notification.fromUserId;
  }

  public getActionName(): string {
    const action = this.notification.action;
    if (action == "like") {
      return "いいね";
    } else if (action == "follow") {
      return "フォロー";
    } else if (action == "reply") {
      return "返信";
    }
  }

}
