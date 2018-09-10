import { TestBed, inject } from '@angular/core/testing';

import { SelectFlightService } from './select-flight.service';

describe('SelectFlightService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SelectFlightService]
    });
  });

  it('should be created', inject([SelectFlightService], (service: SelectFlightService) => {
    expect(service).toBeTruthy();
  }));
});
