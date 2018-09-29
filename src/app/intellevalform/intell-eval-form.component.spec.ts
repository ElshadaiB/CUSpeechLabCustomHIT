import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntellEvalFormComponent } from './intell-eval-form.component';

describe('IntellEvalFormComponent', () => {
  let component: IntellEvalFormComponent;
  let fixture: ComponentFixture<IntellEvalFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntellEvalFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntellEvalFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
