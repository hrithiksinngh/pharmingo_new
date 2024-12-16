import { Injectable } from '@angular/core';
import { PRICING_PLANS, STEPS, TOPICS_1, TOPICS_2 } from '../../constants';
import { ToastrService } from 'ngx-toastr';

type stateType = {
  currentStep: number;
  selectedTopic: string;
  selectedPlan: string;
  filterValues: {
    selectedTopic: string;
    selectedPlan: string;
    planPrice: number;
    currentTab: string;
    tabValue: string;
    countryOptions: any[];
    brandOptions: any[];
    innOptions: any[];
    selectedCountryList: string[];
    selectedBrandList: string[];
    selectedInnList: string[];
    customizedColumns: any[];
    selectedColumnsList: any[];
    totalRecordsCount:number;
    tableData: any[];
    tableHeaders: any[];
  };
};

@Injectable({
  providedIn: 'root', // Singleton service
})
export class FilterService {

  constructor(public toastr: ToastrService) {}
  
  // Default state for the report generation process
  private steps = STEPS;
  private topics_1 = TOPICS_1;
  private topics_2 = TOPICS_2;
  private topics = this.topics_1.concat(this.topics_2);

  private pricingPlans = PRICING_PLANS;

  public state: stateType = {
    currentStep: 0, // Default step
    selectedTopic: '',
    selectedPlan: '',
    filterValues: {
      selectedTopic: '',
      selectedPlan: '',
      planPrice: 0,
      currentTab: 'whoatc',
      tabValue: '',
      countryOptions: [],
      brandOptions: [],
      innOptions: [],
      selectedCountryList: ['All'],
      selectedBrandList: ['All'],
      selectedInnList: ['All'],
      customizedColumns: [],
      selectedColumnsList: [],
      totalRecordsCount:0,
      tableData: [],
      tableHeaders: [],
    },
  };

  // Get current state
  getState() {
    return this.state;
  }

  // Update current step
  setCurrentStep(step: number) {
    this.state.currentStep = step;
  }

  // Update selected topic
  setSelectedTopic(topic: any) {
    // Deselect all topics
    this.topics.forEach((t) => (t.isSelected = false));
    // Select the clicked topic
    topic.isSelected = true;

    // Set the selectedTopic to the title of the selected topic
    this.state.selectedTopic = topic.title;
    this.state.filterValues.selectedTopic = topic.title;
  }

  // Update selected plan
  setSelectedPlan(plan: any) {
    // Deselect all topics
    this.pricingPlans.forEach((t) => (t.isSelected = false));
    // Select the clicked topic
    plan.isSelected = true;

    // Set the selectedTopic to the title of the selected topic
    this.state.selectedPlan = plan.title;
    this.state.filterValues.selectedPlan = plan.title;
    this.state.filterValues.planPrice = plan.price;
  }

  // Update filter values
  updateFilterValues(newValues: any) {
    this.state.filterValues = { ...this.state.filterValues, ...newValues };
  }


  showSuccessToast(message: string) {
    this.toastr.success(
      `
        <div class="flex items-center space-x-1">
          <div class="h-[20px]  toast-success-icon">
          </div>
         <div class="flex items-center h-[30px] space-x-[5px]  min-w-[340px]">
              <div class="text-[18px] font-roboto font-normal text-white"> ${message}</div>
          </div>
        </div>
      `,
      "",
      {
        closeButton: true,
        timeOut: 5000,
        enableHtml: true,
      }
    );
  }

  

  showErrorToast(message: string) {
    this.toastr.error(
      `
        <div class="flex items-center space-x-1 ">
          <div class="h-[20px]  toast-error-icon">
          </div>
          <div class="flex items-center h-[30px] space-x-[5px]  min-w-[340px]">
              <div class="text-[18px] font-roboto font-normal text-white"> ${message}</div>
          </div>
        </div>
      `,
      "",
      {
        closeButton: true,
        timeOut: 5000,
        enableHtml: true,
      }
    );
  }

  showWarningToast(message: string) {
    this.toastr.warning(
      `
        <div class="flex items-center space-x-1">
          <div class="h-[20px]  toast-warning-icon">
          </div>
          <div class="flex items-center h-[30px] space-x-[5px]  min-w-[340px]">
              <div class="text-[18px] font-roboto font-normal text-white"> ${message}</div>
          </div>
        </div>
      `,
      "",
      {
        closeButton: true,
        timeOut: 5000,
        enableHtml: true,
      }
    );
  }

  showInfoToast(message: string) {
    this.toastr.info(
      `
        <div class="flex items-center space-x-1">
          <div class="h-[20px]  toast-info-icon">
          </div>
          <div class="flex items-center h-[30px] space-x-[5px]  min-w-[340px]">
              <div class="text-[18px] font-roboto font-normal text-white"> ${message}</div>
          </div>
        </div>
      `,
      "",
      {
        closeButton: true,
        timeOut: 5000,
        enableHtml: true,
      }
    );
  }

}
