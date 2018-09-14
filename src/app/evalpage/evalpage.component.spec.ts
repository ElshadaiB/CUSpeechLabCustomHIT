import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvalpageComponent } from './evalpage.component';

describe('EvalpageComponent', () => {
  let component: EvalpageComponent;
  let fixture: ComponentFixture<EvalpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvalpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvalpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
