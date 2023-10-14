import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetUpiDetailsComponent } from './get-upi-details.component';

describe('GetUpiDetailsComponent', () => {
  let component: GetUpiDetailsComponent;
  let fixture: ComponentFixture<GetUpiDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GetUpiDetailsComponent]
    });
    fixture = TestBed.createComponent(GetUpiDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
