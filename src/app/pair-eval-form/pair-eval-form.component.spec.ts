import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PairEvalFormComponent } from './pair-eval-form.component';

describe('PairEvalFormComponent', () => {
  let component: PairEvalFormComponent;
  let fixture: ComponentFixture<PairEvalFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PairEvalFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PairEvalFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
