import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateOshaberiPage } from './create-oshaberi.page';

const routes: Routes = [
  {
    path: '',
    component: CreateOshaberiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateOshaberiPageRoutingModule {}
