import { TestBed, async, inject } from '@angular/core/testing';

import { SelectGuardGuard } from './select-guard.guard';

describe('SelectGuardGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SelectGuardGuard]
    });
  });

  it('should ...', inject([SelectGuardGuard], (guard: SelectGuardGuard) => {
    expect(guard).toBeTruthy();
  }));
});
