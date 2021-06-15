import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Platform } from '@ionic/angular';
import { APIService, ModelSortDirection, Oshaberi } from '../API.service';
import { AuthService } from '../shared/services/auth.service';
import { MessageService } from '../shared/services/message.service';
import { OshaberiService } from '../shared/services/oshaberi.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  public oshaberis: Array<Oshaberi> = [];
  private nextToken: string = null;
  private username: string;
  private limit: number = 10;

  constructor(
    private platform: Platform,
    private api: APIService,
    private authService: AuthService,
    private messageService: MessageService,
    private router: Router,
    private oshaberiService: OshaberiService,
  ) { }

  async ngOnInit() {
    await this.platform.ready();
    this.username = (await this.authService.getUser()).getUsername();
    [this.oshaberis, this.nextToken] = await this.getOshaberisAndNextToken(this.username, this.limit, this.nextToken);
    this.promptCreateProfile();
    this.oshaberiService.refreshOshaberiObservable.subscribe(_ => this.refreshOshaberis());
  }

  async loadNextOshaberis(event) {
    if (this.nextToken) {
      let nextOshaberis: Array<Oshaberi>;
      [nextOshaberis, this.nextToken] = await this.getOshaberisAndNextToken(this.username, this.limit, this.nextToken);
      event.target.complete(); // terminate animation
      this.oshaberis = [...this.oshaberis, ...nextOshaberis];
      // stop loading next if no next oshaberis or number of oshaberi items exceeds 300
      if (this.nextToken == null || this.oshaberis.length > 300) {
        event.target.disabled = true;
      }
    } else {
      event.target.disabled = true;
    }
  }

  async refreshOshaberis(event?) {
    this.nextToken = null; // reset nextToken
    [this.oshaberis, this.nextToken] = await this.getOshaberisAndNextToken(this.username, this.limit, this.nextToken);
    if (event) {
      event.target.complete(); // terminate animation
    }
  }

  // returns next oshaberis and updated nextToken
  async getOshaberisAndNextToken(username: string, limit: number, nextToken: string): Promise<Array<any>> {
    return this.api.ListTimelines(username, null, null, limit, nextToken, ModelSortDirection.DESC).then(e => {
      const oshaberis = e.items.map(timeline => timeline.oshaberi);
      return [oshaberis, e.nextToken];
    });
  }

  private async promptCreateProfile() {
    const userInfo = await this.api.GetUserinfo(this.username);
    if (!userInfo) {
      this.messageService.indicateSuccess("ご挨拶を設定しましょう");
      this.router.navigate(['/edit-profile']);
    }
  }

}
