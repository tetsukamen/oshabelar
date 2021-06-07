import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LikeUserListPage } from './like-user-list.page';

const routes: Routes = [
  {
    path: '',
    component: LikeUserListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LikeUserListPageRoutingModule {}
