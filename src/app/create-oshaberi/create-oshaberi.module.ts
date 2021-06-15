import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CreateOshaberiPageRoutingModule } from './create-oshaberi-routing.module';
import { CreateOshaberiPage } from './create-oshaberi.page';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    CreateOshaberiPageRoutingModule,
    SharedModule,
  ],
  declarations: [
    CreateOshaberiPage]
})
export class CreateOshaberiPageModule { }
