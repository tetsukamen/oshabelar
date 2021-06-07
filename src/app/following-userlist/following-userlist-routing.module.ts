import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FollowingUserlistPage } from './following-userlist.page';

const routes: Routes = [
  {
    path: '',
    component: FollowingUserlistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FollowingUserlistPageRoutingModule {}
