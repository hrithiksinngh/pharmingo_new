import { Component, inject, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { serverApiUrl, devApiUrl } from '../../constants';
// import { CarouselModule } from 'ngx-bootstrap/carousel';
import { FilterService } from '../services/filter.service';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SignupComponent {
  constructor(public filterService: FilterService) {}

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
  confirmPasswordType = 'password';
  isSignUpFormSubmit = false;

  private http = inject(HttpClient);

  private router = inject(Router);

  handleSignUp() {
    const userData = {
      email: this.email,
      username: this.username,
      password: this.password,
      confirmPassword: this.confirmPassword,
      companyName: this.companyName,
    };

    console.log('userData is ---- \n ', userData);

    this.isSignUpFormSubmit = true;

    if (!this.otpSent) {
      this.http
        .post(`${serverApiUrl}/api/auth/signup`, {
          email: this.email,
          password: this.password,
          userName: this.username,
          companyName: this.companyName,
        })
        .subscribe({
          next: (response: any) => {
            this.otpSent = true;
            this.errorMessage = '';
            this.successMessage = 'OTP sent to your email.';
            this.router.navigate(['verify-signup-otp'], {
              queryParams: { email: this.email },
            });
            this.filterService.showSuccessToast('Signup successfull !!');
            this.isSignUpFormSubmit = false;
            this.email = '';
            this.username = '';
            this.password = '';
            this.confirmPassword = '';
            this.companyName = '';
          },
          error: (error) => {
            this.errorMessage = 'Failed to send OTP. Please try again.';
            this.successMessage = '';

            console.log('Errro statement', error);
            this.filterService.showErrorToast(error.error.message);
            this.isSignUpFormSubmit = false;
            this.email = '';
            this.username = '';
            this.password = '';
            this.confirmPassword = '';
            this.companyName = '';
          },
        });
    } else {
      console.log('Error in signing Up !!!!');
    }
  }
  showPassword() {
    if (this.passwordType === 'text') {
      this.passwordType = 'password';
    } else {
      this.passwordType = 'text';
    }
  }
  showConfirmPassword() {
    if (this.confirmPasswordType === 'text') {
      this.confirmPasswordType = 'password';
    } else {
      this.confirmPasswordType = 'text';
    }
  }
}
