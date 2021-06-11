import { Component, Input, OnInit } from '@angular/core';
import { Oshaberi } from 'src/app/API.service';
import { OshaberiDetailService } from '../oshaberi-detail.service';

@Component({
  selector: 'app-reaction-panel',
  templateUrl: './reaction-panel.component.html',
  styleUrls: ['./reaction-panel.component.scss'],
})
export class ReactionPanelComponent implements OnInit {
  @Input()
  public oshaberi: Oshaberi;
  public likeAmount: number;

  constructor(
    private oshaberiDetailService: OshaberiDetailService,
  ) { }

  ngOnInit() {
    this.likeAmount = this.oshaberi.like.items.length;
    this.oshaberiDetailService.likeClickedObservable.subscribe(liked => {
      if (liked) {
        this.likeAmount++;
      } else {
        this.likeAmount--;
      }
    });
  }

}
