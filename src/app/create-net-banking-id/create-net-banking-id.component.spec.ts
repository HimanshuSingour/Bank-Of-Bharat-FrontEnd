import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateNetBankingIdComponent } from './create-net-banking-id.component';

describe('CreateNetBankingIdComponent', () => {
  let component: CreateNetBankingIdComponent;
  let fixture: ComponentFixture<CreateNetBankingIdComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateNetBankingIdComponent]
    });
    fixture = TestBed.createComponent(CreateNetBankingIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
