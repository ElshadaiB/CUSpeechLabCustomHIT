import { TestBed, inject } from '@angular/core/testing';

import { UploadDataService } from './upload-data.service';

describe('UploadDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UploadDataService]
    });
  });

  it('should be created', inject([UploadDataService], (service: UploadDataService) => {
    expect(service).toBeTruthy();
  }));
});
