import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { FormBuilder } from '@angular/forms';

import { CreateOshaberiPage } from './create-oshaberi.page';

describe('CreateOshaberiPage', () => {
  let component: CreateOshaberiPage;
  let fixture: ComponentFixture<CreateOshaberiPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [CreateOshaberiPage],
      imports: [IonicModule.forRoot()],
      providers: [
        { provide: FormBuilder, useValue: FormBuilder }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(CreateOshaberiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('OnInit', async () => {
    await component.ngOnInit();
    expect(component.username.length > 0).toBeTruthy();
  })
});
