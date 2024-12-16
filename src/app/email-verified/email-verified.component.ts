import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { serverApiUrl, devApiUrl } from '../../constants';
import { FilterService } from '../services/filter.service';

@Component({
  selector: 'app-email-verified',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './email-verified.component.html',
  styleUrl: './email-verified.component.css',
})
export class EmailVerifiedComponent {
  constructor(public filterService: FilterService) {}

  private http = inject(HttpClient);
  private router = inject(Router);

  email: string | undefined;
  name: string | undefined;
  companyName: string | undefined;

  checkEmailVerification() {
    const url = window.location.href;
    const accessToken = url.split('#access_token=')[1]?.split('&')[0];

    if (accessToken) {
      const atob = (str: string) => window.atob(str);
      const jwt = accessToken.split('.')[1];
      const payload = JSON.parse(atob(jwt));

      this.email = payload.email;
      this.name = payload.user_metadata.userName;
      this.companyName = payload.user_metadata.companyName;

      this.filterService.showSuccessToast('Email verification successfull !!');
    }else{
      this.filterService.showSuccessToast('Email is not valid !!');
    }
  }

  ngOnInit() {
    // send a Tnak you for SignUp Email
    this.checkEmailVerification();
  }
}
