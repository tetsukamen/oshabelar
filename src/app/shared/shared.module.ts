import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OshaberiComponent } from './oshaberi/oshaberi.component';
import { UserDigestComponent } from './user-digest/user-digest.component';
import { HeaderComponent } from './header/header.component';



@NgModule({
  declarations: [
    HeaderComponent,
    OshaberiComponent,
    UserDigestComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    OshaberiComponent,
    UserDigestComponent,
  ]
})
export class SharedModule { }
