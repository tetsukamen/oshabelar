import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  public username: string;

  constructor(
    private authService: AuthService,
    private menu: MenuController,
  ) { }

  async ngOnInit() {
    this.username = await this.authService.getUser().then(e => e.getUsername());
  }

  public closeMenu(): void {
    this.menu.close();
  }

  public async signOut() {
    return await this.authService.signOut();
  }

}
