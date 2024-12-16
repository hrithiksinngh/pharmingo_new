import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifySignupOtpComponent } from './verify-signup-otp.component';

describe('VerifySignupOtpComponent', () => {
  let component: VerifySignupOtpComponent;
  let fixture: ComponentFixture<VerifySignupOtpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VerifySignupOtpComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerifySignupOtpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
