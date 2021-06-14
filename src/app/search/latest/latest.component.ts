import { Component, OnInit } from '@angular/core';
import { APIService, ModelSortDirection, Oshaberi } from 'src/app/API.service';

@Component({
  selector: 'app-latest',
  templateUrl: './latest.component.html',
  styleUrls: ['./latest.component.scss'],
})
export class LatestComponent implements OnInit {
  public oshaberis: Oshaberi[] = [];
  private nextToken: string = null;
  private limit: number = 10;

  constructor(
    private api: APIService,
  ) { }

  async ngOnInit() {
    [this.oshaberis, this.nextToken] = await this.getOshaberisAndNextToken(this.limit, this.nextToken).catch(e => {
      console.log(e)
      return []
    });
  }

  async loadNextOshaberis(event) {
    if (this.nextToken) {
      let nextOshaberis: Array<Oshaberi>;
      [nextOshaberis, this.nextToken] = await this.getOshaberisAndNextToken(this.limit, this.nextToken);
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


  async getOshaberisAndNextToken(limit: number, nextToken: string): Promise<Array<any>> {
    return this.api.ListOshaberisByTimestamp('oshaberi', null, ModelSortDirection.DESC, null, limit, nextToken).then(e => {
      return [e.items, e.nextToken];
    });
  }

}
