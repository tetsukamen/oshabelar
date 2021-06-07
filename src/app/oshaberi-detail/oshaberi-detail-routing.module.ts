import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OshaberiDetailPage } from './oshaberi-detail.page';

const routes: Routes = [
  {
    path: '',
    component: OshaberiDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OshaberiDetailPageRoutingModule {}
