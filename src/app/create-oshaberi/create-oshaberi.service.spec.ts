import { TestBed } from '@angular/core/testing';

import { CreateOshaberiService } from './create-oshaberi.service';

describe('CreateOshaberiService', () => {
  let service: CreateOshaberiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreateOshaberiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
