import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OshaberiDetailPageRoutingModule } from './oshaberi-detail-routing.module';

import { OshaberiDetailPage } from './oshaberi-detail.page';
import { SharedModule } from '../shared/shared.module';
import { ReactionPanelComponent } from './reaction-panel/reaction-panel.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OshaberiDetailPageRoutingModule,
    SharedModule,
  ],
  declarations: [
    OshaberiDetailPage,
    ReactionPanelComponent,
  ]
})
export class OshaberiDetailPageModule { }
