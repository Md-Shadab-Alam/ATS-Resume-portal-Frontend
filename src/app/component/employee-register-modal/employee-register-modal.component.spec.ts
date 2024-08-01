import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeRegisterModalComponent } from './employee-register-modal.component';

describe('EmployeeRegisterModalComponent', () => {
  let component: EmployeeRegisterModalComponent;
  let fixture: ComponentFixture<EmployeeRegisterModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmployeeRegisterModalComponent]
    });
    fixture = TestBed.createComponent(EmployeeRegisterModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
