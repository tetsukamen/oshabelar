import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { UsernamePipe } from '../../shared/pipes/username.pipe';
import { ElapsedTimePipe } from '../pipes/elapsed-time.pipe';
import { ActivatedRoute } from '@angular/router';
import { OshaberiComponent } from './oshaberi.component';
import { Router } from '@angular/router';

describe('OshaberiComponent', () => {
  let component: OshaberiComponent;
  let fixture: ComponentFixture<OshaberiComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [OshaberiComponent, UsernamePipe, ElapsedTimePipe],
      imports: [IonicModule.forRoot()],
      providers: [
        { provide: ActivatedRoute, useValue: ActivatedRoute },
        { provide: Router, useValue: Router },
      ]
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
