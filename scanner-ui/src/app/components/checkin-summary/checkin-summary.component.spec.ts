import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckinSummaryComponent } from './checkin-summary.component';

describe('CheckinSummaryComponent', () => {
  let component: CheckinSummaryComponent;
  let fixture: ComponentFixture<CheckinSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckinSummaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckinSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
