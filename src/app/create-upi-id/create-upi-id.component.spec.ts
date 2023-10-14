import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateUpiIdComponent } from './create-upi-id.component';

describe('CreateUpiIdComponent', () => {
  let component: CreateUpiIdComponent;
  let fixture: ComponentFixture<CreateUpiIdComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateUpiIdComponent]
    });
    fixture = TestBed.createComponent(CreateUpiIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
