import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { LucideAngularModule, XIcon, ChevronLeftIcon } from 'lucide-angular';
import { FilterService } from '../services/filter.service';
import { serverApiUrl, devApiUrl } from '../../constants';

@Component({
  selector: 'app-purchase-report',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './purchase-report.component.html',
  styleUrl: './purchase-report.component.css',
})
export class PurchaseReportComponent {
  readonly XIcon = XIcon;
  readonly ChevronLeftIcon = ChevronLeftIcon;

  @Input() nextStep!: () => void;

  @Input() userName: any = '';
  @Input() email: any = '';

  private http = inject(HttpClient);
  private router = inject(Router);
  newEmail: any = '';

  constructor(public filterService: FilterService) {}

  product = {
    image: 'https://via.placeholder.com/150',
    emial: this.newEmail,
    title: `${this.filterService.getState().selectedPlan} Report`,
    description: `This is the ${
      this.filterService.getState().selectedPlan
    } Report`,
    price: this.filterService.getState().filterValues.planPrice,
    qty: 1,
  };

  ngOnInit() {
    this.newEmail = this.email;
  }

  completePurchase() {
    const filterState = this.filterService.getState();
    sessionStorage.setItem(
      'purchaseReportFilters',
      JSON.stringify(filterState)
    );
    this.checkoutToStripePage();
  }

  checkoutToStripePage() {
    console.log('Product Info:', this.product);
    const accessToken = sessionStorage.getItem('accessToken');

    // Include Authorization header
    const headers = {
      Authorization: `Bearer ${accessToken}`,
    };

    this.http.post(`${serverApiUrl}/api/checkout`, this.product, {headers}).subscribe({
      next: (response: any) => {
        console.log('Checkout successful', response);

        if (response.status === 200) {
          window.open(response.checkoutUrl, '_blank');
        } else {
          console.log('Checkout failed', response);
        }
      },
      error: (error) => {
        console.error('Checkout failed', error);
      },
    });
  }
}
