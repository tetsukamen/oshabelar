import { TestBed } from '@angular/core/testing';

import { OshaberiService } from './oshaberi.service';

describe('OshaberiService', () => {
  let service: OshaberiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OshaberiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
