import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DebitMoneyComponent } from './debit-money.component';

describe('DebitMoneyComponent', () => {
  let component: DebitMoneyComponent;
  let fixture: ComponentFixture<DebitMoneyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DebitMoneyComponent]
    });
    fixture = TestBed.createComponent(DebitMoneyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
