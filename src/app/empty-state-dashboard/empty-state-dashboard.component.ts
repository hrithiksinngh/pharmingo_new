import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { serverApiUrl, devApiUrl } from '../../constants';

@Component({
  selector: 'app-empty-state-dashboard',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './empty-state-dashboard.component.html',
  styleUrl: './empty-state-dashboard.component.css',
})
export class EmptyStateDashboardComponent implements OnInit {
  private http = inject(HttpClient);
  private router = inject(Router);

  loggedInUser: any = null;
  isLoading = true; // Track loading state

  email: string | undefined;

  ngOnInit() {
    // Perform authentication check
    const user = sessionStorage.getItem('loggedInUser');

    if (user) {
      this.loggedInUser = JSON.parse(user);

      this.email = this.loggedInUser.email;
      console.log('email:', this.loggedInUser.email);
    } else {
      this.router.navigate(['']);
      return; // Prevent further execution if redirected
    }

    // Set loading to false once the user is validated
    this.isLoading = false;
  }

  signOut() {
    sessionStorage.removeItem('loggedInUser');

    this.router.navigate(['/']);
  }
}
