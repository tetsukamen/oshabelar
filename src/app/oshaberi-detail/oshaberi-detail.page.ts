import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { APIService, Oshaberi } from '../API.service';
import { MessageService } from '../shared/message.service';

@Component({
  selector: 'app-oshaberi-detail',
  templateUrl: './oshaberi-detail.page.html',
  styleUrls: ['./oshaberi-detail.page.scss'],
})
export class OshaberiDetailPage implements OnInit {
  public oshaberi: Oshaberi;
  public oshaberiId: string;

  constructor(
    public route: ActivatedRoute,
    private api: APIService,
    private messageService: MessageService,
  ) { }

  async ngOnInit() {
    this.oshaberiId = this.route.snapshot.params['oshaberi-id'];
    this.oshaberi = await this.api.GetOshaberi(this.oshaberiId).catch(err => {
      console.log(err)
      this.messageService.indicateWarning("データ取得に失敗しました");
      return null;
    });
  }
}
