import { TestBed, inject } from '@angular/core/testing';

import { ExecutionCookieReaderService } from './execution-cookie-reader.service';

describe('ExecutionCookieReaderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ExecutionCookieReaderService]
    });
  });

  it('should be created', inject([ExecutionCookieReaderService], (service: ExecutionCookieReaderService) => {
    expect(service).toBeTruthy();
  }));
});
