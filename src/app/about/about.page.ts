import { Component, OnInit } from '@angular/core';
import { ResponsibleService } from '../shared/services/responsible.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {

  constructor(
    public responsibleService: ResponsibleService,
  ) { }

  ngOnInit() {
  }

}
