import { Location } from '@angular/common';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() iconType: 'menu' | 'back' | 'search';
  @Input() title: string = null;
  @Input() buttonText: string = null;
  @Input() buttonDisabled: boolean = false;
  @Output() buttonClicked: EventEmitter<boolean> = new EventEmitter();
  @Output() searchText: EventEmitter<string> = new EventEmitter();

  constructor(
    private location: Location,
  ) { }

  ngOnInit() { }

  goBack(): void {
    this.location.back();
  }

  sendButtonClickEvent() {
    this.buttonClicked.emit(true);
  }

  search(event) {
    const inputText = event.target.value;
    this.searchText.emit(inputText);
  }

}
