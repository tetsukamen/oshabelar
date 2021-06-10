import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  public username: string;

  constructor(
    public route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.username = this.route.snapshot.params['username'];
  }

}
