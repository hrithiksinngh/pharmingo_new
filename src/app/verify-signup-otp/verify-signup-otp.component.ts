import { Component, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import {serverApiUrl, devApiUrl } from '../../constants';

@Component({
  selector: 'app-verify-signup-otp',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './verify-signup-otp.component.html',
  styleUrl: './verify-signup-otp.component.css',
})
export class VerifySignupOtpComponent {
  constructor() {}

  otp: string = '';
  email: string = ''; // You may want to pass this as an input to the component
  errorMessage: string = '';
  successMessage: string = '';

  private http = inject(HttpClient);
  private router = inject(Router);
  private route = inject(ActivatedRoute);

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.email = params['email'];
    });
  }

  private decode(token: string) {
    return JSON.parse(atob(token.split('.')[1]));
  }

  sendSuccessfullSignUpEmail() {
    this.http
      .post(`${serverApiUrl}/api/signup-successfull-email`, {
        to: this.email,
        name: this.email,
      })
      .subscribe({
        next: (response: any) => {
          console.log('resposne is ---- \n ', response);
          this.successMessage = 'Signup Successful Email sent !!';
          this.errorMessage = '';
        },
        error: (error) => {
          this.errorMessage = 'Signup Successful Email not sent !!';
          this.successMessage = '';
        },
      });
  }

  handleSignUp(response: any) {
    // send a Tnak you for SignUp Email
    this.sendSuccessfullSignUpEmail();

    this.router.navigate(['email-verified']);
  }

  verifyOtp() {
    this.http
      .post(`${serverApiUrl}/api/auth/verify-otp`, {
        email: this.email,
        otp: this.otp,
      })
      .subscribe({
        next: (response: any) => {
          this.errorMessage = '';
          this.successMessage = 'Login successful!';
          console.log('resposne is ---- \n ', response);
          // store data in session
          this.handleSignUp(response?.session);
        },
        error: (error) => {
          this.errorMessage = 'Invalid OTP. Please try again.';
          this.successMessage = '';
        },
      });
  }

  handleResendVerification(){
    this.http
      .post(`${serverApiUrl}/api/auth/resend-signup-confirmation`, {
        email: this.email,
      })
      .subscribe({
        next: (response: any) => {
          this.errorMessage = '';
          this.successMessage = 'OTP sent to your email.';
        },
        error: (error) => {
          this.errorMessage = 'Failed to send OTP. Please try again.';
          this.successMessage = '';
        },
      });
  }
}
