import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NotificationPageRoutingModule } from './notification-routing.module';

import { NotificationPage } from './notification.page';
import { SharedModule } from '../shared/shared.module';
import { NotificationItemComponent } from './notification-item/notification-item.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NotificationPageRoutingModule,
    SharedModule,
  ],
  declarations: [
    NotificationPage,
    NotificationItemComponent,
  ]
})
export class NotificationPageModule { }
