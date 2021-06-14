import { Injectable } from '@angular/core';
import { APIService, ModelNotificationFilterInput, Notification } from 'src/app/API.service';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private username: string;
  public haveNotReadNotifications: Notification[];
  public haveNotReadCount: number;

  constructor(
    private authService: AuthService,
    private api: APIService,
  ) { }

  public async getHaveNotReadNotifications() {
    this.username = await this.authService.getUser().then(e => e.getUsername());
    const filter: ModelNotificationFilterInput = {
      haveRead: {
        eq: false,
      },
    }
    this.haveNotReadNotifications = await this.api.ListNotifications(this.username, null, filter).then(e => e.items);
    // start watching notification creation
    this.api.OnCreateNotificationListener(this.username).subscribe((event: any) => {
      const newNotification = event.value.data.onCreateNotification;
      this.haveNotReadNotifications = [newNotification, ...this.haveNotReadNotifications];
      this.haveNotReadCount++;
    });
  }

  public async getNotificationsCount() {
    await this.getHaveNotReadNotifications();
    return this.haveNotReadNotifications.length;
  }

  public async makeNotificationsAllreadyRead() {
    this.haveNotReadCount = 0;
    const makeAllreadyRead = this.haveNotReadNotifications.map(notification => {
      return this.api.UpdateNotification({ userId: this.username, timestamp: notification.timestamp, haveRead: true });
    });
    return await Promise.all(makeAllreadyRead);
  }
}
