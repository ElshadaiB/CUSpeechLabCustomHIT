import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicPairFormQuestionComponent } from './dynamic-pair-form-question.component';

describe('DynamicPairFormQuestionComponent', () => {
  let component: DynamicPairFormQuestionComponent;
  let fixture: ComponentFixture<DynamicPairFormQuestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicPairFormQuestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicPairFormQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
