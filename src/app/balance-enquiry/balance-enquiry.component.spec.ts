import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BalanceEnquiryComponent } from './balance-enquiry.component';

describe('BalanceEnquiryComponent', () => {
  let component: BalanceEnquiryComponent;
  let fixture: ComponentFixture<BalanceEnquiryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BalanceEnquiryComponent]
    });
    fixture = TestBed.createComponent(BalanceEnquiryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
