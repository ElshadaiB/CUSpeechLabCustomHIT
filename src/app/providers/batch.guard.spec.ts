import { TestBed, async, inject } from '@angular/core/testing';

import { BatchGuard } from './batch.guard';

describe('BatchGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BatchGuard]
    });
  });

  it('should ...', inject([BatchGuard], (guard: BatchGuard) => {
    expect(guard).toBeTruthy();
  }));
});
