import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Oshaberi } from 'src/app/API.service';

@Component({
  selector: 'app-oshaberi-body',
  templateUrl: './oshaberi-body.component.html',
  styleUrls: ['./oshaberi-body.component.scss'],
})
export class OshaberiBodyComponent implements OnInit {
  @Input()
  public oshaberi: Oshaberi;

  constructor(
    private router: Router,
  ) { }

  ngOnInit() { }

  goToOshaberiDetailPage() {
    this.router.navigate(['/oshaberi-detail', this.oshaberi.id]);
  }

}
