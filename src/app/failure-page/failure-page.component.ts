import { Component, inject, OnInit } from '@angular/core';

import { FilterService } from '../services/filter.service';
import { serverApiUrl, devApiUrl } from '../../constants';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-failure-page',
  standalone: true,
  imports: [],
  templateUrl: './failure-page.component.html',
  styleUrl: './failure-page.component.css',
})
export class FailurePageComponent implements OnInit {
  constructor(public filterService: FilterService) {}

  userPurchaseReportFilters: any;
  private http = inject(HttpClient);

  purchaseReportData: any = null;
  newTitle: any = null;
  newDescription: any = null;
  newPrice: any = null;
  product: any = {};

  ngOnInit() {
    const data = sessionStorage.getItem('purchaseReportFilters');

    if (data) {
      this.purchaseReportData = JSON.parse(data);

      this.newTitle = this.purchaseReportData.filterValues.selectedPlan;
      this.newDescription = this.purchaseReportData.filterValues.selectedPlan;
      this.newPrice = this.purchaseReportData.filterValues.planPrice;
      this.product = {
        image: 'https://via.placeholder.com/150',
        title: `${this.newTitle} Report`,
        description: `This is the ${this.newDescription} Report`,
        price: this.newPrice,
        qty: 1,
      };

      console.log('data:', this.purchaseReportData);
    }
  }

  checkoutToStripePage() {
    console.log('Product Info:', this.product);
    const accessToken = sessionStorage.getItem('accessToken');

    // Include Authorization header
    const headers = {
      Authorization: `Bearer ${accessToken}`,
    };

    this.http.post(`${serverApiUrl}/api/checkout`, this.product,{headers}).subscribe({
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

  purchaseReport() {
    console.log('Re initializing Purchase Report !!');
    this.checkoutToStripePage();
  }
}
