import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LikeUserListPageRoutingModule } from './like-user-list-routing.module';

import { LikeUserListPage } from './like-user-list.page';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LikeUserListPageRoutingModule,
    SharedModule,
  ],
  declarations: [LikeUserListPage]
})
export class LikeUserListPageModule { }
