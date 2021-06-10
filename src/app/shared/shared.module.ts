import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OshaberiComponent } from './oshaberi/oshaberi.component';
import { UserDigestComponent } from './user-digest/user-digest.component';
import { HeaderComponent } from './header/header.component';
import { OshaberiButtonComponent } from './oshaberi-button/oshaberi-button.component';
import { UsernamePipe } from './pipes/username.pipe';
import { ElapsedTimePipe } from './pipes/elapsed-time.pipe';
import { ActionPanelComponent } from './action-panel/action-panel.component';
import { OshaberiHeaderComponent } from './oshaberi-header/oshaberi-header.component';
import { OshaberiBodyComponent } from './oshaberi-body/oshaberi-body.component';



@NgModule({
  declarations: [
    HeaderComponent,
    OshaberiComponent,
    OshaberiHeaderComponent,
    OshaberiBodyComponent,
    OshaberiButtonComponent,
    UserDigestComponent,
    ActionPanelComponent,
    UsernamePipe,
    ElapsedTimePipe,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    OshaberiComponent,
    OshaberiHeaderComponent,
    OshaberiBodyComponent,
    OshaberiButtonComponent,
    UserDigestComponent,
    ActionPanelComponent,
  ]
})
export class SharedModule { }
