import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.scss'],
})
export class MenuListComponent implements OnInit {
  public username: string;

  constructor(
    private menu: MenuController,
    private router: Router,
    private authService: AuthService,
  ) { }

  async ngOnInit() {
    this.username = (await this.authService.getUser()).getUsername();
  }

  public navigate(pageName: string, segment?: string): void {
    const path = pageName == 'profile' ? `${pageName}/${this.username}` : pageName;
    this.router.navigate([`/${path}`, { segment: segment }]);
    this.menu.close();
  }

}
