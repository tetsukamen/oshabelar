import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';
import { OshaberiButtonComponent } from './oshaberi-button.component';

describe('OshaberiButtonComponent', () => {
  let component: OshaberiButtonComponent;
  let fixture: ComponentFixture<OshaberiButtonComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [OshaberiButtonComponent],
      imports: [IonicModule.forRoot()],
      providers: [
        { provide: Router, useValue: Router },
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(OshaberiButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
