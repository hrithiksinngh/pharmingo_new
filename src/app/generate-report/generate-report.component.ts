import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, ActivatedRoute, RouterLink } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { PricingPageComponent } from '../pricing-page/pricing-page.component';
import { SelectTopicComponent } from '../select-topic/select-topic.component';
import { FilterPreviewDataComponent } from '../filter-preview-data/filter-preview-data.component';
import { PurchaseReportComponent } from '../purchase-report/purchase-report.component';
import { FormsModule } from '@angular/forms';
import { DownloadExlporeComponent } from '../download-exlpore/download-exlpore.component';
import {
  LucideAngularModule,
  ChevronLeftIcon,
  XIcon,
  LoaderCircleIcon,
  HelpCircleIcon,
  LogOutIcon
} from 'lucide-angular';
import { PRICING_PLANS, STEPS, TOPICS_1, TOPICS_2 } from '../../constants';
import { FilterService } from '../services/filter.service';

import { serverApiUrl, devApiUrl } from '../../constants';

@Component({
  selector: 'app-generate-report',
  standalone: true,
  imports: [
    CommonModule,
    LucideAngularModule,
    PricingPageComponent,
    SelectTopicComponent,
    FilterPreviewDataComponent,
    PurchaseReportComponent,
    FormsModule,
    DownloadExlporeComponent,
    RouterLink,
  ],
  templateUrl: './generate-report.component.html',
  styleUrl: './generate-report.component.css',
})
export class GenerateReportComponent implements OnInit {
  private http = inject(HttpClient);
  private router = inject(Router);
  private route = inject(ActivatedRoute);

  readonly ChevronLeftIcon = ChevronLeftIcon;
  readonly LoaderCircleIcon = LoaderCircleIcon;
  readonly XIcon = XIcon;
  readonly HelpCircleIcon = HelpCircleIcon;
  readonly LogOutIcon = LogOutIcon;

  loggedInUser: any = null;
  isLoading = true;

  email: string | undefined;
  name: string | undefined;
  companyName: string | undefined;
  isFilteredDataLoading: boolean = false;

  constructor(public filterService: FilterService) {}

  steps = STEPS;

  currentStep() {
    return this.filterService.getState().currentStep;
  }

  ngOnInit() {
    // Perform authentication check
    const user = sessionStorage.getItem('loggedInUser');

    if (user) {
      this.loggedInUser = JSON.parse(user);

      this.email = this.loggedInUser.email;
      this.name = this.loggedInUser.user_metadata.userName;
      this.companyName = this.loggedInUser.user_metadata.companyName;
      console.log('email:', this.loggedInUser.email);
    } else {
      this.router.navigate(['']);
      return; // Prevent further execution if redirected
    }

    // Set loading to false once the user is validated
    this.isLoading = false;

    this.route.params.subscribe((params) => {
      const stateData = this.filterService.getState();
      stateData.currentStep = +params['step'] - 1 || 0;
    });
  }

  goToStep(step: number) {
    this.filterService.getState().currentStep = step;
    this.router.navigate(['/generate-report/step', step]);
  }

  nextStep() {
    if (this.filterService.getState().currentStep < this.steps.length - 1) {
      this.filterService.getState().currentStep++;
      console.log(
        'Current Step --- ',
        this.filterService.getState().currentStep
      );
      this.goToStep(this.filterService.getState().currentStep + 1);
    }
  }

  previousStep() {
    if (this.filterService.getState().currentStep > 0) {
      this.goToStep(this.filterService.getState().currentStep);
      this.filterService.getState().currentStep--;
    }
  }

  signOut() {
    sessionStorage.removeItem('loggedInUser');
    this.router.navigate(['/']);
  }

  isModalOpen = false;

  closeModal() {
    this.isModalOpen = false;
  }

  openModal() {
    this.isModalOpen = true;
  }

  topics_1 = TOPICS_1;

  topics_2 = TOPICS_2;

  topics = this.topics_1.concat(this.topics_2);

  selectTopic(topic: any) {
    this.filterService.setSelectedTopic(topic);
  }

  navigateToPricing() {
    const selectedTopic = this.filterService.getState().selectedTopic;
    console.log('Selected Topic --- ', selectedTopic);

    // Check if a topic is selected (not null and not an empty string)
    if (selectedTopic !== null && selectedTopic !== '') {
      this.nextStep();
    } else {
      console.log('No topic selected.');
    }
  }

  // Variables for search inputs
  searchWHOATC = '';
  searchIndication = '';
  searchMOA = '';
  selectedTab: string = 'whoatc';

  // Variable to track the selected option
  selectedOption: { list: string; item: string } | null = null;

  // Sample data
  WHOATCList = [];
  IndicationList = [];
  MOAList = [];

  countryList = [];
  brandList = [];
  innList = [];

  // Filter WHOATC List
  filteredWHOATCList(): string[] {
    if (!this.searchWHOATC)
      return this.WHOATCList.sort((a: any, b: any) => a.localeCompare(b));
    return this.WHOATCList.filter((item: any) =>
      item.toLowerCase().startsWith(this.searchWHOATC.toLowerCase())
    );
  }

  // Filter Indication List
  filteredIndicationList(): string[] {
    if (!this.searchIndication)
      return this.IndicationList.sort((a: any, b: any) => a.localeCompare(b));
    return this.IndicationList.filter((item: any) =>
      item?.toLowerCase().includes(this.searchIndication.toLowerCase())
    );
  }

  // Filter MOA List
  filteredMOAList(): string[] {
    if (!this.searchMOA)
      return this.MOAList.sort((a: any, b: any) => a.localeCompare(b));
    return this.MOAList.filter((item: any) =>
      item.toLowerCase().includes(this.searchMOA.toLowerCase())
    );
  }

  // Handle selection
  selectOption(list: string, item: string) {
    this.selectedOption = { list, item };
  }

  pricingPlans = PRICING_PLANS;

  selectedPlan: string | null = null;

  isTopicFilterLoading: boolean = false;

  // Get the data for the slected topic

  async getSelectedTopicFilters() {
    console.log(
      'Selected Topic for getting filters ---->',
      this.filterService.getState().selectedTopic
    );
    this.isTopicFilterLoading = true;

    const apiUrl: string = `${serverApiUrl}/api/get-pricing-distinct-view`;

    const accessToken = sessionStorage.getItem('accessToken');

    // Include Authorization header
    const headers = {
      Authorization: `Bearer ${accessToken}`,
    };

    this.http
      .post(apiUrl, {
        selectedTopic: this.filterService.getState().selectedTopic,
        selectedPlan: this.filterService.getState().selectedPlan,
      }, {headers})
      .subscribe({
        next: (response: any) => {
          console.log('resposne is ---- \n ', response);

          // Update the component's lists with data from the API response
          this.WHOATCList = (response.whoatc || []).filter(
            (item: any) => item && item !== 'N/A' && item.trim() !== ''
          );
          this.IndicationList = (response.indication || []).filter(
            (item: any) => item && item !== 'N/A' && item.trim() !== ''
          );
          this.MOAList = (response.moa || []).filter(
            (item: any) => item && item !== 'N/A' && item.trim() !== ''
          );
          this.filteredWHOATCList();
          this.filteredIndicationList();
          this.filteredMOAList();
          this.isTopicFilterLoading = false;
        },
        error: (error) => {
          console.log('error is ---- \n ', error);
          this.isTopicFilterLoading = false;
        },
      });
  }

  // Method to select a topic and update the selection state
  async selectPlan(plan: any) {
    // Deselect all topics
    this.filterService.setSelectedPlan(plan);

    await this.getSelectedTopicFilters();
    this.openModal();
  }

  navigateToFilterData() {
    console.log('Selection submitted');
    console.log(
      'Selected Topic is ---- ',
      this.filterService.getState().filterValues.selectedTopic
    );
    console.log(
      'Selected Plan is ---- ',
      this.filterService.getState().filterValues.selectedPlan
    );
    console.log('Selected Option is ---- ', this.selectedOption);

    if (
      this.filterService.getState().filterValues.selectedPlan !== '' ||
      this.filterService.getState().filterValues.selectedPlan !== null
    ) {
      this.nextStep();
      this.getInitialTableData();
    }
  }

  submitSelection() {
    // Handle the selection logic

    this.filterService.getState().filterValues.tabValue =
      this.selectedOption?.item || '';
    this.filterService.getState().filterValues.currentTab =
      this.selectedOption?.list || '';

    this.navigateToFilterData();
    this.closeModal();
  }

  sendEmailofTalk(plan: any) {
    const userData = {
      userName: this.name,
      planName: plan.title,
      userEmail: this.email,
      companyName: this.companyName,
    };

    this.selectedPlan = plan.title;

    console.log('UserData is ---- \n ', userData);
    console.log('Selected Plan is ---- \n ', this.selectedPlan);

    const accessToken = sessionStorage.getItem('accessToken');

    // Include Authorization header
    const headers = {
      Authorization: `Bearer ${accessToken}`,
    };

    this.http.post(`${serverApiUrl}/api/email-of-talk`, userData ,{headers}).subscribe({
      next: (response: any) => {
        console.log('resposne is ---- \n ', response);
        this.router.navigate([`/selected-package`], {
          queryParams: { packageName: this.selectedPlan },
        });
      },
      error: (error) => {
        console.log('error is ---- \n ', error);
      },
    });
  }

  getTableData(indication: string, indication_value: string) {
    this.isFilteredDataLoading = true;
    const filtersData = {
      selectedTopic: this.filterService.getState().selectedTopic,
      selectedPlan: this.filterService.getState().selectedPlan,
      indication: indication,
      indication_value: indication_value,
      inn: [],
      country_name: [],
      brand_name: [],
    };
    console.log('filtersData is ---- \n ', filtersData);
    const accessToken = sessionStorage.getItem('accessToken');

    // Include Authorization header
    const headers = {
      Authorization: `Bearer ${accessToken}`,
    };

    this.http.post(`${serverApiUrl}/api/filter-data`, filtersData, {headers}).subscribe({
      next: (response: any) => {
        console.log('resposne is ---- \n ', response.data);

        this.filterService.getState().filterValues.tableData = response.data;
        this.filterService.getState().filterValues.totalRecordsCount = response.count;
        const tableHeaders =
          this.filterService.getState().filterValues.tableData.length > 0
            ? Object.keys(
                this.filterService.getState().filterValues.tableData[0]
              )
            : [];

        this.filterService.getState().filterValues.tableHeaders = tableHeaders;

        this.filterService.getState().filterValues.customizedColumns =
          tableHeaders.map((header: any) => ({
            name: header,
            selected: true,
          }));

        this.filterService.getState().filterValues.selectedColumnsList =
          tableHeaders.map((header: any) => header);

        this.filterService.getState().filterValues.countryOptions =
          response.country.map((item: any) => {
            return {
              option: item,
              isChecked: true,
            };
          }) || [];
        this.filterService.getState().filterValues.brandOptions =
          response.brand_names.map((item: any) => {
            return {
              option: item,
              isChecked: true,
            };
          }) || [];
        this.filterService.getState().filterValues.innOptions =
          response.inn.map((item: any) => {
            return {
              option: item,
              isChecked: true,
            };
          }) || [];

        this.filterService.getState().filterValues.selectedCountryList =
          response.country || [];
        this.filterService.getState().filterValues.selectedBrandList =
          response.brand_names || [];
        this.filterService.getState().filterValues.selectedInnList =
          response.inn || [];

        console.log(
          'Updated table data is ---- \n ',
          this.filterService.getState().filterValues.tableData
        );
        this.isFilteredDataLoading = false;
      },
      error: (error) => {
        console.log('error is ---- \n ', error);
        this.isFilteredDataLoading = false;
      },
    });
  }

  initializeCustomizeColumns(): void {
    this.filterService.getState().filterValues.customizedColumns =
      this.filterService
        .getState()
        .filterValues.tableHeaders.map((header: any) => ({
          name: header,
          selected: true,
        }));
  }

  getInitialTableData() {
    console.log(
      'just logging to see data in filterValues',
      this.filterService.getState().filterValues
    );

    this.getTableData(
      this.filterService.getState().filterValues.currentTab,
      this.filterService.getState().filterValues.tabValue
    );

    // this.filterService.getState().filterValues.tableData = TABLE_DATA;
    // const tableHeaders =
    //   TABLE_DATA.length > 0 ? Object.keys(TABLE_DATA[0]) : [];
    // this.filterService.getState().filterValues.tableHeaders = tableHeaders;

    // this.filterService.getState().filterValues.customizedColumns =
    //   tableHeaders.map((header: any) => ({
    //     name: header,
    //     selected: true,
    //   }));

    // this.filterService.getState().filterValues.selectedColumnsList =
    //   tableHeaders.map((header: any) => header);

    // this.filterService.getState().filterValues.countryOptions =
    //   COUNTRY_LIST_DATA.map((item: any) => {
    //     return {
    //       option: item,
    //       isChecked: true,
    //     };
    //   }) || [];
    // this.filterService.getState().filterValues.brandOptions =
    //   BRANDS_LIST_DATA.map((item: any) => {
    //     return {
    //       option: item,
    //       isChecked: true,
    //     };
    //   }) || [];
    // this.filterService.getState().filterValues.innOptions =
    //   INN_LIST_DATA.map((item: any) => {
    //     return {
    //       option: item,
    //       isChecked: true,
    //     };
    //   }) || [];

    // this.filterService.getState().filterValues.selectedCountryList =
    //   COUNTRY_LIST_DATA || [];
    // this.filterService.getState().filterValues.selectedBrandList =
    //   BRANDS_LIST_DATA || [];
    // this.filterService.getState().filterValues.selectedInnList =
    //   INN_LIST_DATA || [];
  }
}
