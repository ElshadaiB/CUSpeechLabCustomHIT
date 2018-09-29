import { TestBed, inject } from '@angular/core/testing';

import { QuestionControlService } from './question-control-service.service';

describe('QuestionControlServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [QuestionControlService]
    });
  });

  it('should be created', inject([QuestionControlService], (service: QuestionControlService) => {
    expect(service).toBeTruthy();
  }));
});
