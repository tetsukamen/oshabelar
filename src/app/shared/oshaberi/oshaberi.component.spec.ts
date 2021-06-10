import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { UsernamePipe } from '../../shared/pipes/username.pipe';
import { ElapsedTimePipe } from '../pipes/elapsed-time.pipe';

import { OshaberiComponent } from './oshaberi.component';

describe('OshaberiComponent', () => {
  let component: OshaberiComponent;
  let fixture: ComponentFixture<OshaberiComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [OshaberiComponent, UsernamePipe, ElapsedTimePipe],
      imports: [IonicModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(OshaberiComponent);
    component = fixture.componentInstance;
    component.oshaberi = {
      __typename: "Oshaberi",
      owner: 'tetsukamen',
      author: 'tetsukamen',
      timestamp: 1623116830,
      content: "テストです",
    }
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
