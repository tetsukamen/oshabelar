import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OshaberiComponent } from './oshaberi/oshaberi.component';
import { UserDigestComponent } from './user-digest/user-digest.component';
import { HeaderComponent } from './header/header.component';
import { OshaberiButtonComponent } from './oshaberi-button/oshaberi-button.component';



@NgModule({
  declarations: [
    HeaderComponent,
    OshaberiComponent,
    OshaberiButtonComponent,
    UserDigestComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    OshaberiComponent,
    OshaberiButtonComponent,
    UserDigestComponent,
  ]
})
export class SharedModule { }
