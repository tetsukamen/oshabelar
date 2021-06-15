import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OshaberiService {
  public refreshOshaberiSubject: Subject<boolean> = new Subject();
  public refreshOshaberiObservable = this.refreshOshaberiSubject.asObservable();

  constructor() { }
}
