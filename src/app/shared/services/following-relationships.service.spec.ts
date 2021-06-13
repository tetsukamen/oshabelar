import { TestBed } from '@angular/core/testing';

import { FollowingRelationshipsService } from './following-relationships.service';

describe('FollowingRelationshipsService', () => {
  let service: FollowingRelationshipsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FollowingRelationshipsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
