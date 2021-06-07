import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FollowingUserlistPageRoutingModule } from './following-userlist-routing.module';

import { FollowingUserlistPage } from './following-userlist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FollowingUserlistPageRoutingModule
  ],
  declarations: [FollowingUserlistPage]
})
export class FollowingUserlistPageModule {}
