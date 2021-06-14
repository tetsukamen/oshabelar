import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../shared/services/notification.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {

  constructor(
    private notificationService: NotificationService,
  ) { }

  async ngOnInit() {
    this.notificationService.haveNotReadCount = await this.notificationService.getNotificationsCount();
  }

  readNotifications() {
    // make allready read notifications
    this.notificationService.makeNotificationsAllreadyRead();
  }

}
