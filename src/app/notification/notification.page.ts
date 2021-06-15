import { Component, OnInit } from '@angular/core';
import { APIService, ModelSortDirection } from '../API.service';
import { AuthService } from '../shared/services/auth.service';
import { NotificationService } from '../shared/services/notification.service';
import { ResponsibleService } from '../shared/services/responsible.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.page.html',
  styleUrls: ['./notification.page.scss'],
})
export class NotificationPage implements OnInit {
  public notifications: Notification[];
  private username: string = null;
  private nextToken: string;
  private limit: number = 10;

  constructor(
    private api: APIService,
    private authService: AuthService,
    private notificationService: NotificationService,
    public responsibleService: ResponsibleService,
  ) { }

  async ngOnInit() {
    // get first notifications
    this.username = await this.authService.getUser().then(e => e.getUsername());
    [this.notifications, this.nextToken] = await this.getNotificationsAndNextToken(this.username, null);
    // listen to  newly created notification
    this.api.OnCreateNotificationListener(this.username).subscribe((event: any) => {
      const newNotification = event.value.data.onCreateNotification;
      this.notifications = [newNotification, ...this.notifications];
    });
  }

  async loadNextNotification(event?) {
    if (this.nextToken) {
      let nextNotifications: Array<Notification>;
      [nextNotifications, this.nextToken] = await this.getNotificationsAndNextToken(this.username, null);
      event.target.complete(); // terminate animation
      this.notifications = [...this.notifications, ...nextNotifications];
      // stop loading next if no next oshaberis or number of notifications exceeds 300
      if (this.nextToken == null || this.notifications.length > 300) {
        event.target.disabled = true;
      }
    } else {
      event.target.disabled = true;
    }
  }

  async getNotificationsAndNextToken(username: string, nextToken: string): Promise<Array<any>> {
    return await this.api.ListNotifications(username, null, null, this.limit, nextToken, ModelSortDirection.DESC).then(e => {
      return [e.items, e.nextToken];
    });
  }

}
