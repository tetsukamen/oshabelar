import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-like-user-list',
  templateUrl: './like-user-list.page.html',
  styleUrls: ['./like-user-list.page.scss'],
})
export class LikeUserListPage implements OnInit {
  public oshaberiId: string;

  constructor(
    public route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.oshaberiId = this.route.snapshot.params['oshaberi-id'];
  }

}
