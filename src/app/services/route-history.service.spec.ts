import { TestBed, inject } from '@angular/core/testing';

import { RouteHistoryService } from './route-history.service';

describe('RouteHistoryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RouteHistoryService]
    });
  });

  it('should be created', inject([RouteHistoryService], (service: RouteHistoryService) => {
    expect(service).toBeTruthy();
  }));
});
