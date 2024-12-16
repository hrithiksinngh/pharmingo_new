import { Component, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import {serverApiUrl, devApiUrl } from '../../constants';
import { FilterService } from '../services/filter.service';

@Component({
  selector: 'app-verify-login-otp',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './verify-login-otp.component.html',
  styleUrl: './verify-login-otp.component.css',
})
export class VerifyLoginOtpComponent {
  constructor(public filterService: FilterService) {}

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

  handleLogin(response: any) {
    // decode the token
    const payload = this.decode(response?.access_token);

    // store data in session
    sessionStorage.setItem('loggedInUser', JSON.stringify(payload));
    sessionStorage.setItem('accessToken', response?.access_token);

    // navigate to home or dashboard page

    this.router.navigate(['dashboard']);

    this.filterService.showSuccessToast('Login successful !!');
  }

  resendOtp() {
    this.http
      .post(`${serverApiUrl}/api/auth/login`, { email: this.email })
      .subscribe({
        next: (response: any) => {
          this.errorMessage = '';
          this.successMessage = 'OTP sent to your email.';
          this.router.navigate(['verify-login-otp'], {
            queryParams: { email: this.email },
          });
        },
        error: (error) => {
          this.errorMessage = 'Failed to send OTP. Please try again.';
          this.successMessage = '';
        },
      });
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
          this.successMessage = 'Login successfull !!';
          console.log('resposne is ---- \n ', response);
          // store data in session
          this.handleLogin(response?.session);

        },
        error: (error) => {
          this.errorMessage = 'Invalid OTP. Please try again.';
          this.successMessage = '';
          this.filterService.showErrorToast('Login Failed, try again !!')
        },
      });
  }
}
