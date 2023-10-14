import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditMoneyComponent } from './credit-money.component';

describe('CreditMoneyComponent', () => {
  let component: CreditMoneyComponent;
  let fixture: ComponentFixture<CreditMoneyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreditMoneyComponent]
    });
    fixture = TestBed.createComponent(CreditMoneyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
