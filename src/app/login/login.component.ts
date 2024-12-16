import { Component, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { serverApiUrl, devApiUrl } from '../../constants';
import { LucideAngularModule, XIcon } from 'lucide-angular';
import { FilterService } from '../services/filter.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, LucideAngularModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  constructor(private filterService: FilterService) {}

  email: string = '';
  username: string = '';
  password: string = '';
  confirmPassword: string = '';
  companyName: string = '';
  otp: string = '';
  otpSent: boolean = false;
  errorMessage: string = '';
  successMessage: string = '';
  passwordType = 'password';
  isLoginFormSubmit = false;
  isResetPasswordFormSubmit = false;
  isForgotPasswordModalOpen = false;
  secondEmail: string = '';
  newPassword: string = '';

  readonly XIcon = XIcon;

  private http = inject(HttpClient);

  private router = inject(Router);

  sendOtp() {
    const userData = {
      email: this.email,
      username: this.username,
      password: this.password,
      confirmPassword: this.confirmPassword,
      companyName: this.companyName,
    };

    console.log('userData is ---- \n ', userData);

    this.isLoginFormSubmit = true;

    if (!this.otpSent) {
      this.http
        .post(`${serverApiUrl}/api/auth/login`, { email: this.email })
        .subscribe({
          next: (response: any) => {
            this.otpSent = true;
            this.errorMessage = '';
            this.successMessage = 'OTP sent to your email.';
            this.router.navigate(['verify-login-otp'], {
              queryParams: { email: this.email },
            });
            this.isLoginFormSubmit = false;
          },
          error: (error) => {
            console.log(error);
            this.errorMessage = 'Failed to send OTP. Please try again.';
            this.successMessage = '';
            this.isLoginFormSubmit = false;
            this.filterService.showErrorToast('User not found. Please signup !!.');
          },
        });
    } else {
      this.verifyOtp();
    }
  }

  private decode(token: string) {
    return JSON.parse(atob(token.split('.')[1]));
  }

  handleLogin(response: any) {
    // decode the token
    const payload = this.decode(response?.access_token);

    // store data in session
    sessionStorage.setItem('loggedInUser', JSON.stringify(payload));

    // navigate to home or dashboard page

    this.router.navigate(['dashboard']);
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
          this.handleLogin(response?.session);
        },
        error: (error) => {
          this.errorMessage = 'Invalid OTP. Please try again.';
          this.successMessage = '';
        },
      });
  }

  showPassword() {
    if (this.passwordType === 'text') {
      this.passwordType = 'password';
    } else {
      this.passwordType = 'text';
    }
  }

  openForgotPasswordModal() {
    this.isForgotPasswordModalOpen = true;
  }

  closeForgotPasswordModal() {
    this.isForgotPasswordModalOpen = false;
  }

  sendPasswordResetLink() {
    this.isResetPasswordFormSubmit = true;

    const data = {
      email: this.secondEmail,
      password: this.newPassword,
      confirmPassword: this.confirmPassword,
    };

    console.log('New pass data', data);
    this.http
      .post(`${serverApiUrl}/api/auth/send-reset-password-link`, {
        email: this.secondEmail,
      })
      .subscribe({
        next: (response: any) => {
          this.errorMessage = '';
          this.successMessage = 'Password reset successfull !!';

          this.isResetPasswordFormSubmit = false;

          console.log('resposne is ---- \n ', response);

          if (response.status === 200) {
            this.filterService.showSuccessToast('Sent password reset link !!');
            this.isForgotPasswordModalOpen = false;
            this.router.navigate(['reset-password']);
          }
        },
        error: (error) => {
          this.errorMessage = 'Failed to reset password. Please try again.';
          this.successMessage = '';
          this.isResetPasswordFormSubmit = false;
          this.filterService.showErrorToast(
            'Failed to sent password reset link !!'
          );
          this.isForgotPasswordModalOpen = false;
        },
      });
  }
}
