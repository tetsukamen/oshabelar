import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-oshaberi-button',
  templateUrl: './oshaberi-button.component.html',
  styleUrls: ['./oshaberi-button.component.scss'],
})
export class OshaberiButtonComponent implements OnInit {

  constructor(
    private router: Router,
  ) { }

  ngOnInit() { }

  goToCreateOshaberiPage(): void {
    this.router.navigate(['/create-oshaberi'])
  }

}
