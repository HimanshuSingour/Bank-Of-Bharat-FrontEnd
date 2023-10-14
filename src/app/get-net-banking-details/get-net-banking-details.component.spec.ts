import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetNetBankingDetailsComponent } from './get-net-banking-details.component';

describe('GetNetBankingDetailsComponent', () => {
  let component: GetNetBankingDetailsComponent;
  let fixture: ComponentFixture<GetNetBankingDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GetNetBankingDetailsComponent]
    });
    fixture = TestBed.createComponent(GetNetBankingDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
