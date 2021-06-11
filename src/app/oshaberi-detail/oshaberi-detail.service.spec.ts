import { TestBed } from '@angular/core/testing';

import { OshaberiDetailService } from './oshaberi-detail.service';

describe('OshaberiDetailService', () => {
  let service: OshaberiDetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OshaberiDetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
