import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ResponsibleService {
  public size: 'sp' | 'tab' | 'pc' = 'sp';
  public showSideMenu: boolean = false;
  public sideMenuSize: number = 4;
  public contentSize: number = 8;

  constructor() { }


  public setSize() {
    const width = window.innerWidth;
    if (width > 960) {
      this.size = 'pc';
      this.showSideMenu = true;
    } else if (width > 600) {
      this.size = 'tab';
      this.showSideMenu = true;
    } else {
      this.size = 'sp';
      this.contentSize = 12;
    }
  }
}
