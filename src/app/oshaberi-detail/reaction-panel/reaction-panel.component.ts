import { Component, Input, OnInit } from '@angular/core';
import { Oshaberi } from 'src/app/API.service';

@Component({
  selector: 'app-reaction-panel',
  templateUrl: './reaction-panel.component.html',
  styleUrls: ['./reaction-panel.component.scss'],
})
export class ReactionPanelComponent implements OnInit {
  @Input()
  public oshaberi: Oshaberi;

  constructor() { }

  ngOnInit() { }

}
