import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicPairPageComponent } from './dynamic-pair-page.component';

describe('DynamicPairPageComponent', () => {
  let component: DynamicPairPageComponent;
  let fixture: ComponentFixture<DynamicPairPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicPairPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicPairPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
