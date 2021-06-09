import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HomePage } from './home.page';
import Amplify from "aws-amplify";
import aws_exports from "../../aws-exports";

Amplify.configure(aws_exports);

describe('HomePage', () => {
  let component: HomePage;
  let fixture: ComponentFixture<HomePage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [HomePage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();
  }));

  beforeEach(async () => {
    await Amplify.Auth.signIn('testuser', 'Jer4*&ZiNtZ^');
    fixture = TestBed.createComponent(HomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  })

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('load next oshaberis when scroll down', () => {
  //   expect(component).toBeTruthy();
  //   const timer1 = setInterval(_ => {
  //     clearInterval(timer1);
  //   }, 1000);
  //   const initialOshaberiLength = component.oshaberis.length;
  //   const event = new Event('ionInfinite');
  //   fixture.nativeElement.querySelector('ion-infinite-scroll').dispatchEvent(event);
  //   const timer2 = setInterval(_ => {
  //     clearInterval(timer2);
  //   }, 1000);
  //   // const updatedOshaberiLength = component.oshaberis.length;
  //   expect(initialOshaberiLength).toBe(1);
  // });

  // it('refresh oshaberis when swipe down', () => {
  //   const event = new Event('ionRefresh');
  //   fixture.nativeElement.querySelector('ion-refresher').dispatchEvent(event);
  //   const timer = setInterval(_ => {
  //     clearInterval(timer);
  //   }, 1000);
  //   expect(component.oshaberis.length).toEqual(0);
  // })

  it('getOshaberisAndNextToken works', async () => {
    const [oshaberis, nextToken] = await component.getOshaberisAndNextToken('tetsukamen', 5, null);
    expect(oshaberis).toEqual(jasmine.any(Array));
  })

});
