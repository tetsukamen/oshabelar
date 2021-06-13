import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FollowingUserlistPageRoutingModule } from './following-userlist-routing.module';

import { FollowingUserlistPage } from './following-userlist.page';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FollowingUserlistPageRoutingModule,
    SharedModule,
  ],
  declarations: [FollowingUserlistPage]
})
export class FollowingUserlistPageModule { }
