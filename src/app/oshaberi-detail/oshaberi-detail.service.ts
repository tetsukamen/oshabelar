import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OshaberiDetailService {
  public likeClickedSubject: Subject<boolean> = new Subject();
  public likeClickedObservable = this.likeClickedSubject.asObservable();

  constructor() { }

}
