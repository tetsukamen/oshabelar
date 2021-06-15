import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OshaberiComponent } from './components/oshaberi/oshaberi.component';
import { UserDigestComponent } from './components/user-digest/user-digest.component';
import { HeaderComponent } from './components/header/header.component';
import { OshaberiButtonComponent } from './components/oshaberi-button/oshaberi-button.component';
import { UsernamePipe } from './pipes/username.pipe';
import { ElapsedTimePipe } from './pipes/elapsed-time.pipe';
import { ActionPanelComponent } from './components/action-panel/action-panel.component';
import { OshaberiHeaderComponent } from './components/oshaberi-header/oshaberi-header.component';
import { OshaberiBodyComponent } from './components/oshaberi-body/oshaberi-body.component';
import { MenuListComponent } from './components/menu-list/menu-list.component';



@NgModule({
  declarations: [
    HeaderComponent,
    OshaberiComponent,
    OshaberiHeaderComponent,
    OshaberiBodyComponent,
    OshaberiButtonComponent,
    UserDigestComponent,
    ActionPanelComponent,
    MenuListComponent,
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
    MenuListComponent,
    UserDigestComponent,
    ActionPanelComponent,
  ]
})
export class SharedModule { }
