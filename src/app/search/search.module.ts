import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SearchPageRoutingModule } from './search-routing.module';

import { SearchPage } from './search.page';
import { SharedModule } from '../shared/shared.module';
import { LatestComponent } from './latest/latest.component';
import { PopularComponent } from './popular/popular.component';
import { UserComponent } from './user/user.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SearchPageRoutingModule,
    SharedModule,
  ],
  declarations: [
    SearchPage,
    LatestComponent,
    PopularComponent,
    UserComponent,
  ]
})
export class SearchPageModule { }
