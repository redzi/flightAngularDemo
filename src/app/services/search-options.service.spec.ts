import { TestBed, inject } from '@angular/core/testing';

import { SearchOptionsService } from './search-options.service';

describe('SearchOptionsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SearchOptionsService]
    });
  });

  it('should be created', inject([SearchOptionsService], (service: SearchOptionsService) => {
    expect(service).toBeTruthy();
  }));
});
