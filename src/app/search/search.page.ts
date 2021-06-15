import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { APIService, Oshaberi, SearchableOshaberiFilterInput, SearchableOshaberiSortableFields, SearchableOshaberiSortInput, SearchableSortDirection } from '../API.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {
  public oshaberis: Oshaberi[] = [];
  private nextToken: string = null;
  private limit: number = 10;
  private searchText: string;
  public segmentValue: string = "search";

  constructor(
    private api: APIService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.segmentValue = this.route.snapshot.params["segment"];
  }

  async search(searchText) {
    this.searchText = searchText;
    [this.oshaberis, this.nextToken] = await this.getSearchedOshaberisAndNextToken(this.searchText, this.nextToken);
    this.segmentValue = 'search';
  }

  async loadNextOshaberis(event) {
    if (this.nextToken) {
      let nextOshaberis: Array<Oshaberi>;
      [nextOshaberis, this.nextToken] = await this.getSearchedOshaberisAndNextToken(this.searchText, this.nextToken);
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

  public segmentValueChanged(event) {
    this.segmentValue = event.target.value;
  }

  async getSearchedOshaberisAndNextToken(searchText: string, nextToken: string): Promise<Array<any>> {
    const filter: SearchableOshaberiFilterInput = {
      content: {
        matchPhrase: searchText,
      }
    };
    const sort: SearchableOshaberiSortInput = {
      field: SearchableOshaberiSortableFields.timestamp,
      direction: SearchableSortDirection.desc,
    }
    return await this.api.SearchOshaberis(filter, sort, this.limit, nextToken).then(e => {
      return [e.items, e.nextToken];
    });
  }

}
