import { CommonModule } from '@angular/common';
import {
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  inject,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { CustomDropdownComponent } from '../custom-dropdown/custom-dropdown.component';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import {
  CdkDragDrop,
  moveItemInArray,
  DragDropModule,
} from '@angular/cdk/drag-drop';

import {
  COUNTRY_LIST_DATA,
  BRANDS_LIST_DATA,
  INN_LIST_DATA,
  TABLE_DATA,
} from '../../constants';
import { FilterService } from '../services/filter.service';
import { serverApiUrl, devApiUrl } from '../../constants';
import { LucideAngularModule, LoaderCircleIcon , XIcon ,FilterIcon } from 'lucide-angular';

@Component({
  selector: 'app-filter-preview-data',
  standalone: true,
  imports: [
    CommonModule,
    LucideAngularModule,
    CustomDropdownComponent,
    DragDropModule,
    FormsModule,
  ],
  templateUrl: './filter-preview-data.component.html',
  styleUrl: './filter-preview-data.component.css',
})
export class FilterPreviewDataComponent {
  @Input() nextStep!: () => void;

  @Input() WHOATCList: any[] = [];
  @Input() IndicationList: any[] = [];
  @Input() MOAList: any[] = [];
  @Input() isFilteredDataLoading: boolean = false;
  @Input() label: string = 'Select';
  @Input() options: string[] = [];
  @Input() tabOptions: { [key: string]: string[] } = {};
  @Output() selectionChange = new EventEmitter<string>();

  readonly LoaderCircleIcon = LoaderCircleIcon;
  readonly XIcon = XIcon;
  readonly FilterIcon = FilterIcon;

  private http = inject(HttpClient);
  constructor(
    private dropRef: ElementRef,
    public filterService: FilterService
  ) {}

  isOpen = false;
  selectedOption: string = '';
  isDropdownOpen = false;

  searchQuery = '';
  tabs = ['whoatc', 'indication', 'moa'];

  customizeColumns: { name: string; selected: boolean }[] = [];

  isCustomizeColumnsModalOpen = false;
  selectAll: boolean = true;
  displaySelectedOptions: any[] = [];
  dropdownId: string = 'dropdown-1';
  isApplyFiltersDisabled: boolean = true;
  isFilteredApplied: boolean = false;
  isFilterModalOpen :boolean = false;  

  dateColumnsList = [
    'price_start_date',
    'source_update_date',
    'indication_approval_date',
    'assessment_publication_date',
  ];

  blurColumnsList = [
    'exfactory_price',
    'hospital_price',
    'ppp',
    'pp_inc_vat',
    'reimbursed_classification',
    'reimbursable_price',
    'copayment_price',

    'product_dosing_loading',
    'product_dosing_maintenance',
    'frequency_loading',
    'frequency_maintenance',
    'duration_loading',
    'duration_maintenance',
    'body_surface_area',
    'average_weight',

    'national_hta_body',
    'assessment_publication_date',
    'decision',
    'standardised_decision',
    'clinical_reason',
    'economical_reason',
    'comparator_drug_hta',
    'utilisation_restrictions',

    'per_pack',
    'per_day_including_wastage',
    'per_month_including_wastage',
    'per_annum_including_wastage',
    'per_duration_of_treatment_including_wastage',

    'top_level_indication_name',
    'regulatory_indication',
    'line_of_therapy',
    'regulatory_agency',
    'indication_approval_date',
  ];

  numberColumnsList = [
    'exfactory_price',
    'hospital_price',
    'ppp',
    'pp_inc_vat',
    'reimbursed_classification',
    'reimbursable_price',
    'copayment_price',
    'product_dosing_loading',
    'product_dosing_maintenance',
    'frequency_loading',
    'frequency_maintenance',
    'duration_loading',
    'duration_maintenance',
    'body_surface_area',
    'average_weight',
    'national_hta_body',
    'assessment_publication_date',
    'per_pack',
    'per_day_including_wastage',
    'per_month_including_wastage',
    'per_annum_including_wastage',
    'per_duration_of_treatment_including_wastage',
    'indication_approval_date',
  ];

  closeFilterModal() {
    this.isFilterModalOpen = false;
  }

  openFilterModal() {
    this.isFilterModalOpen = true;
  }


  // In your component
  formatHeader(header: string): string {
    return header
      .replace(/_/g, ' ') // Replace underscores with spaces
      .replace(/\b\w/g, (char) => char.toUpperCase()); // Capitalize first letter of each word
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

    this.http
      .post(`${serverApiUrl}/api/filter-data`, filtersData, { headers })
      .subscribe({
        next: (response: any) => {
          console.log('resposne is ---- \n ', response.data);

          this.filterService.getState().filterValues.tableData = response.data;
          this.filterService.getState().filterValues.totalRecordsCount =
            response.count;
          const tableHeaders =
            this.filterService.getState().filterValues.tableData.length > 0
              ? Object.keys(
                  this.filterService.getState().filterValues.tableData[0]
                )
              : [];

          this.filterService.getState().filterValues.tableHeaders =
            tableHeaders;

          this.filterService.getState().filterValues.selectedColumnsList =
            this.filterService.getState().filterValues.selectedColumnsList
              .length === 0
              ? tableHeaders.map((header: any) => header)
              : this.filterService.getState().filterValues.selectedColumnsList;

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
          this.applyCustomizeColumns();
        },
        error: (error) => {
          console.log('error is ---- \n ', error);
          this.isFilteredDataLoading = false;
        },
      });
  }

  getGranularFilterData(country: string[], brand: string[], inn: string[]) {
    const filtersData = {
      selectedTopic: this.filterService.getState().selectedTopic,
      selectedPlan: this.filterService.getState().selectedPlan,
      indication: this.filterService.getState().filterValues.currentTab,
      indication_value: this.filterService.getState().filterValues.tabValue,
      inn: inn,
      country_name: country,
      brand_name: brand,
    };
    this.isFilteredDataLoading = true;
    console.log('filtersData is ---- \n ', filtersData);
    const accessToken = sessionStorage.getItem('accessToken');

    // Include Authorization header
    const headers = {
      Authorization: `Bearer ${accessToken}`,
    };

    this.http
      .post(`${serverApiUrl}/api/filter-data`, filtersData, { headers })
      .subscribe({
        next: (response: any) => {
          console.log('resposne is ---- \n ', response.data);

          this.filterService.getState().filterValues.tableData = response.data;
          this.filterService.getState().filterValues.totalRecordsCount =
            response.count;

          const tableHeaders =
            this.filterService.getState().filterValues.tableData.length > 0
              ? Object.keys(
                  this.filterService.getState().filterValues.tableData[0]
                )
              : [];
          this.filterService.getState().filterValues.tableHeaders =
            tableHeaders;

          this.filterService.getState().filterValues.selectedColumnsList =
            tableHeaders.map((header: any) => header);

          this.filterService.getState().filterValues.customizedColumns =
            tableHeaders.map((header: any) => ({
              name: header,
              selected: true,
            }));

          this.isFilteredDataLoading = true;

          // console.log('Updated table data is ---- \n ');
          this.isFilteredDataLoading = false;
        },
        error: (error) => {
          console.log('error is ---- \n ', error);
          this.isFilteredDataLoading = false;
        },
      });
  }

  ngOnInit() {
    this.tabOptions = {
      whoatc: this.WHOATCList,
      indication: this.IndicationList,
      moa: this.MOAList,
    };
  }

  toggleDropdown() {
    this.isOpen = !this.isOpen;
  }

  selectOption(option: string) {
    this.selectedOption = option;
    this.selectionChange.emit(option);
    this.isOpen = false;
    this.logFilterValues(); // Log values after a change
  }

  toggleTabsDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  selectTab(tab: string) {
    this.isDropdownOpen = !this.isDropdownOpen;
    this.filterService.getState().filterValues.currentTab = tab; // Update the current tab in filterValues
    this.searchQuery = ''; // Clear search when switching tabs
    this.setDefaultOptionForTab(tab); // Set default option for the new tab
    this.logFilterValues(); // Log values after a change
  }

  setDefaultOptionForTab(tab: string) {
    this.selectionChange.emit(
      this.filterService.getState().filterValues.tabValue
    );
    this.logFilterValues();
  }

  selectTabsOption(option: string) {
    this.filterService.getState().filterValues.tabValue = option;
    this.selectionChange.emit(option);
    this.isDropdownOpen = false;
    this.logFilterValues(); // Log values after a change

    console.log(
      'Selected tab after change is ---- ',
      this.filterService.getState().filterValues.currentTab
    );
    console.log(
      'Selected tab value after change is ---- ',
      this.filterService.getState().filterValues.tabValue
    );
    this.getTableData(
      this.filterService.getState().filterValues.currentTab,
      this.filterService.getState().filterValues.tabValue
    );
  }

  get filteredOptions() {
    // Filter options based on the active tab and search query
    return (
      this.tabOptions[this.filterService.getState().filterValues.currentTab] ||
      []
    ).filter((option) =>
      option?.toLowerCase().includes(this.searchQuery?.toLowerCase())
    );
  }

  checkIfFiltersChanged() {
    const state = this.filterService.getState().filterValues;
    const hasUnchecked = (options: any[]) =>
      options.some((option) => !option.isChecked);

    // Update button state: enabled if any unchecked option exists
    this.isApplyFiltersDisabled = !(
      hasUnchecked(state.countryOptions) ||
      hasUnchecked(state.brandOptions) ||
      hasUnchecked(state.innOptions)
    );
  }

  // Close dropdown if clicked outside
  // Close dropdown if clicked outside
  @HostListener('document:mousedown', ['$event'])
  onClickOutside(event: MouseEvent) {
    const clickedInside = (event.target as HTMLElement).closest(
      `#${this.dropdownId}`
    );
    if (!clickedInside) {
      this.isDropdownOpen = false;
    }
  }

  onCountryChange(selectedCountry: string[]) {
    this.isFilteredApplied = selectedCountry.length > 0;
    this.filterService.getState().filterValues.selectedCountryList =
      selectedCountry; // Update country in filterValues
    this.logFilterValues(); // Log values after a change
    this.checkIfFiltersChanged();
  }

  onBrandChange(selectedBrand: string[]) {
    this.isFilteredApplied = selectedBrand.length > 0;
    this.filterService.getState().filterValues.selectedBrandList =
      selectedBrand; // Update brand in filterValues
    this.logFilterValues();
    this.checkIfFiltersChanged();
  }

  onInnChange(selectedInn: string[]) {
    this.isFilteredApplied = selectedInn.length > 0;
    this.filterService.getState().filterValues.selectedInnList = selectedInn; // Update INN in filterValues
    this.logFilterValues(); // Log values after a change
    this.checkIfFiltersChanged();
  }

  applyFilters() {
    this.filterService.getState().filterValues.selectedCountryList =
      this.filterService
        .getState()
        .filterValues.countryOptions.filter((option) => option.isChecked)
        .map((country) => country.option); // Update country in filterValues
    this.filterService.getState().filterValues.selectedBrandList =
      this.filterService
        .getState()
        .filterValues.brandOptions.filter((option) => option.isChecked)
        .map((brand) => brand.option); // Update brand in filterValues
    this.filterService.getState().filterValues.selectedInnList =
      this.filterService
        .getState()
        .filterValues.innOptions.filter((option) => option.isChecked)
        .map((inn) => inn.option); // Update INN in filterValues

    this.getGranularFilterData(
      this.filterService.getState().filterValues.selectedCountryList,
      this.filterService.getState().filterValues.selectedBrandList,
      this.filterService.getState().filterValues.selectedInnList
    );
    this.isFilteredApplied = false;
    this.isApplyFiltersDisabled = true;
    this.closeFilterModal()
  }

  logFilterValues() {
    console.log('Filter Values:', this.filterService.getState().filterValues);
  }

  logSelectedOptions() {
    console.log(
      'Selected Countries:',
      this.filterService.getState().filterValues.selectedCountryList
    );
    console.log(
      'Selected Brands:',
      this.filterService.getState().filterValues.selectedBrandList
    );
    console.log(
      'Selected INNs:',
      this.filterService.getState().filterValues.selectedInnList
    );
  }

  navigateToPurchaseReport() {
    console.log('Filter Values:', this.filterService.getState().filterValues);

    this.nextStep();
  }

  applyNewFilters(newFilters: any) {
    // this.getTableData(newFilters.currentTab, newFilters.tabValue);
  }

  formatCellValue(value: any): string {
    if (value === '' || value === ' ' || value === null) {
      return 'N/A';
    } else if (typeof value === 'number') {
      return value.toFixed(2);
    }
    return value || 'N/A';
  }

  isNumeric(column: string): boolean {
    if (this.numberColumnsList.includes(column)) {
      return true;
    }
    return false;
  }

  formatDate(value: string): string {
    if (value) {
      const date = new Date(value);

      // Extract day, month, and year
      const day = String(date.getDate()).padStart(2, '0'); // Ensure 2 digits
      const month = String(date.getMonth() + 1).padStart(2, '0'); // Month is zero-based
      const year = date.getFullYear();

      // Return formatted date
      return `${day}-${month}-${year}`; // e.g., "14-11-2024"
    }
    return 'N/A'; // Handle null or invalid date values
  }

  toggleCustomizeColumnsModal(): void {
    this.isCustomizeColumnsModalOpen = !this.isCustomizeColumnsModalOpen;
  }

  closeCustomizeColumnsModal(): void {
    this.isCustomizeColumnsModalOpen = false;
    this.filterService.getState().filterValues.customizedColumns =
      this.filterService
        .getState()
        .filterValues.customizedColumns.map((col) => {
          return { ...col, selected: true }; // Ensure selected is always true
        });
    this.selectAll = true
  }

  onDrop(event: CdkDragDrop<any[]>): void {
    moveItemInArray(
      this.filterService.getState().filterValues.customizedColumns,
      event.previousIndex,
      event.currentIndex
    );
  }

  applyCustomizeColumns(): void {
    const selectedColumns = this.filterService
      .getState()
      .filterValues.customizedColumns.filter((col) => col.selected);
    this.filterService.getState().filterValues.tableHeaders =
      selectedColumns.map((col) => col.name);
    this.filterService.getState().filterValues.selectedColumnsList =
      selectedColumns.map((col) => col.name);
    console.log(
      'Updated Columns:',
      this.filterService.getState().filterValues.tableHeaders
    );
    console.log(
      'Updated Columns:',
      this.filterService.getState().filterValues.selectedColumnsList
    );
    this.closeCustomizeColumnsModal();
  }

  toggleSelectAll(): void {
    this.filterService
      .getState()
      .filterValues.customizedColumns.forEach(
        (column) => (column.selected = this.selectAll)
      );
    this.selectAll = !this.selectAll;
  }

  updateSelectAllState(): void {
    this.selectAll = this.filterService
      .getState()
      .filterValues.customizedColumns.every((column) => column.selected);
  }
}
