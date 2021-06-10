import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Oshaberi } from 'src/app/API.service';

@Component({
  selector: 'app-oshaberi',
  templateUrl: './oshaberi.component.html',
  styleUrls: ['./oshaberi.component.scss'],
})
export class OshaberiComponent implements OnInit {
  @Input() oshaberi: Oshaberi;

  constructor(
    private router: Router,
  ) { }

  ngOnInit() { }

  goToProfilePage() {
    this.router.navigate(['/profile', this.oshaberi.author])
  }

}
