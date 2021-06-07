import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OshaberiDetailPageRoutingModule } from './oshaberi-detail-routing.module';

import { OshaberiDetailPage } from './oshaberi-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OshaberiDetailPageRoutingModule
  ],
  declarations: [OshaberiDetailPage]
})
export class OshaberiDetailPageModule {}
