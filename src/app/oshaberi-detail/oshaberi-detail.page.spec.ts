import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { OshaberiDetailPage } from './oshaberi-detail.page';

describe('OshaberiDetailPage', () => {
  let component: OshaberiDetailPage;
  let fixture: ComponentFixture<OshaberiDetailPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [OshaberiDetailPage],
      imports: [IonicModule.forRoot()],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: { snapshot: { params: { 'oshaberi-id': '6b1c0750-9c5b-440d-ac2e-8aad5e7fd758' } } }
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(OshaberiDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
