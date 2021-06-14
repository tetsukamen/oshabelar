import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Oshaberi } from 'src/app/API.service';

@Component({
  selector: 'app-oshaberi-header',
  templateUrl: './oshaberi-header.component.html',
  styleUrls: ['./oshaberi-header.component.scss'],
})
export class OshaberiHeaderComponent implements OnInit {
  @Input()
  public oshaberi: Oshaberi;
  public displayName: string;

  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
    if (this.oshaberi.userInfo && this.oshaberi.userInfo.nickname) {
      this.displayName = this.oshaberi.userInfo.nickname;
    } else {
      this.displayName = this.oshaberi.author;
    }
  }

  goToProfilePage() {
    this.router.navigate(['/profile', this.oshaberi.author]);
  }

}
