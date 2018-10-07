import { TestBed, inject } from '@angular/core/testing';

import { SelectedOfferProviderService } from './selected-offer-provider.service';

describe('SelectedOfferProviderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SelectedOfferProviderService]
    });
  });

  it('should be created', inject([SelectedOfferProviderService], (service: SelectedOfferProviderService) => {
    expect(service).toBeTruthy();
  }));
});
