import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateOshaberiPageRoutingModule } from './create-oshaberi-routing.module';

import { CreateOshaberiPage } from './create-oshaberi.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateOshaberiPageRoutingModule
  ],
  declarations: [CreateOshaberiPage]
})
export class CreateOshaberiPageModule {}
