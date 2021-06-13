import { Component, Input, OnInit } from '@angular/core';
import { Userinfo } from 'src/app/API.service';

@Component({
  selector: 'app-user-digest',
  templateUrl: './user-digest.component.html',
  styleUrls: ['./user-digest.component.scss'],
})
export class UserDigestComponent implements OnInit {
  @Input()
  userInfo: Userinfo;

  constructor() { }

  ngOnInit() { }

}
