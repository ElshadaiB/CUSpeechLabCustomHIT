import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PairwisepageComponent } from './pairwisepage.component';

describe('PairwisepageComponent', () => {
  let component: PairwisepageComponent;
  let fixture: ComponentFixture<PairwisepageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PairwisepageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PairwisepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
