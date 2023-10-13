import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletAccountComponent } from './delet-account.component';

describe('DeletAccountComponent', () => {
  let component: DeletAccountComponent;
  let fixture: ComponentFixture<DeletAccountComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeletAccountComponent]
    });
    fixture = TestBed.createComponent(DeletAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
