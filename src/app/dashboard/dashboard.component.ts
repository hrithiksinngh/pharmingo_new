import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { LucideAngularModule ,EyeIcon ,DownloadIcon ,ChevronsUpDownIcon } from 'lucide-angular';
import { PurchaseHistoryComponent } from '../purchase-history/purchase-history.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule,LucideAngularModule , PurchaseHistoryComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent implements OnInit {

  readonly EyeIcon = EyeIcon;
  readonly DownloadIcon = DownloadIcon;
  readonly ChevronsUpDownIcon = ChevronsUpDownIcon;

  private http = inject(HttpClient);
  private router = inject(Router);

  loggedInUser: any = null;
  isLoading = true; // Track loading state

  email: string | undefined;
  

  ngOnInit() {
    // Perform authentication check
    const user = sessionStorage.getItem('loggedInUser');

    

    // if (user) {
    //   this.loggedInUser = JSON.parse(user);
    

    //   this.email = this.loggedInUser.email;
    //   console.log('email:', this.loggedInUser.email);
    
    // } else {
    //   this.router.navigate(['']);
    //   return; // Prevent further execution if redirected
    // }

    // Set loading to false once the user is validated
    this.isLoading = false;
  }

  signOut() {
    sessionStorage.removeItem('loggedInUser');
    this.router.navigate(['/']);
  }
  
}
