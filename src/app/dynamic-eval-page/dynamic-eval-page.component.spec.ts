import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicEvalPageComponent } from './dynamic-eval-page.component';

describe('DynamicEvalPageComponent', () => {
  let component: DynamicEvalPageComponent;
  let fixture: ComponentFixture<DynamicEvalPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicEvalPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicEvalPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
