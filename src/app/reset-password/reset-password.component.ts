

import { Component, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { serverApiUrl, devApiUrl } from '../../constants';
import { LucideAngularModule, XIcon } from 'lucide-angular';
import { FilterService } from '../services/filter.service';

@Component({
  selector: 'app-reset-password',
  standalone: true,
  imports: [CommonModule, FormsModule, LucideAngularModule],
  templateUrl: './reset-password.component.html',
  styleUrl: './reset-password.component.css'
})
export class ResetPasswordComponent {

  constructor(private filterService :FilterService) {}
  
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
  isResettingPassword = false;
  isForgotPasswordModalOpen = false;
  secondEmail: string = '';
  newPassword: string = '';


  readonly XIcon = XIcon;

  private http = inject(HttpClient);

  private router = inject(Router);
  accessToken: any = "";

  
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

  resetPassword() : any {
    this.isResettingPassword = true;

    const data = {
      email:this.secondEmail,
      otp:this.otp,
      password: this.newPassword,
      confirmPassword: this.confirmPassword,
    }

    if(this.confirmPassword === '' ||  this.newPassword === '') {
      return this.errorMessage = 'Passwords cannot be empty';
    }

    if(this.confirmPassword !== this.newPassword) {
      return this.errorMessage = 'Passwords do not match';
    }

    console.log("New pass data", data)
    this.http
      .post(`${serverApiUrl}/api/auth/reset-password`, {
        email:this.secondEmail,
        otp:this.otp,
        new_password: this.newPassword,
      })
      .subscribe({
        next: (response: any) => {
          this.errorMessage = '';
          this.successMessage = 'Password reset successfull !';
          this.isResettingPassword = false;
           if(response.status === 200){
            this.filterService.showSuccessToast('Password reset successfull !!');
            this.router.navigate(['login']);
           }
        },
        error: (error) => {
          this.errorMessage = 'Failed to reset password. Please try again.';
          this.successMessage = '';
          this.isResettingPassword = false;
          this.filterService.showErrorToast('Password reset failed !!');
         
        },
      });
  }

}
