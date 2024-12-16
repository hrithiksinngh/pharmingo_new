import { CommonModule } from '@angular/common';
import { Component, EventEmitter, inject, Input, Output } from '@angular/core';

@Component({
  selector: 'app-pricing-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pricing-page.component.html',
  styleUrl: './pricing-page.component.css',
})
export class PricingPageComponent {
  @Input() pricingPlans: any[] = [];

  @Input()  selectedPlan: string | null = null;
  @Output() planSelected = new EventEmitter<any>();
  @Output() emailofTalk = new EventEmitter<any>();
  @Output() navigateToFilterData = new EventEmitter<any>();

  selectPlan(topic: any) {
    this.planSelected.emit(topic);
  }

  sendEmailofTalk(plan: any) {
    this.emailofTalk.emit(plan);
  }

  // Function to handle button click
  handlePlanSelection(plan: { title: string; buttonText: string }) {
    // Check the title and call the appropriate method
    if (plan.title === 'Basic Access' || plan.title === 'Enhanced Access') {
      this.selectPlan(plan); // Call selectTopic if title matches
    }else{
      this.sendEmailofTalk(plan);
    }
  }

 
}
