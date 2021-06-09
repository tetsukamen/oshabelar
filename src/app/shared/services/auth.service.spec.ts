import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';
import Amplify from "aws-amplify";
import aws_exports from "../../../aws-exports";

Amplify.configure(aws_exports);

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(async () => {
    await Amplify.Auth.signIn('testuser', 'Jer4*&ZiNtZ^');
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('get user works', async () => {
    expect(await service.getUser()).toBeTruthy();
  })
});
