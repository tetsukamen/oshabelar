import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() iconType: 'profile' | 'back';
  @Input() title: string;
  @Input() buttonText: string;
  @Output() buttonClicked: EventEmitter<boolean> = new EventEmitter();
  @Output() searchText: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit() { }

}
