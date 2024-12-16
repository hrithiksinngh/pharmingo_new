import { CommonModule } from '@angular/common';
import {
  Component,
  Input,
  Output,
  EventEmitter,
  ElementRef,
  HostListener,
  SimpleChanges,
  OnChanges,
  OnInit,
} from '@angular/core';
import { FormsModule } from '@angular/forms';

import { LucideAngularModule, ChevronDownIcon } from 'lucide-angular';
import { FilterService } from '../services/filter.service';

@Component({
  selector: 'app-custom-dropdown',
  standalone: true,
  imports: [CommonModule, LucideAngularModule, FormsModule],
  templateUrl: './custom-dropdown.component.html',
  styleUrl: './custom-dropdown.component.css',
})
export class CustomDropdownComponent implements OnInit {
  @Input() label: string = 'Select';
  @Input() options: any[] = [];
  @Input() isFilteredApplied: boolean = false;

  @Output() selectionChange = new EventEmitter<string[]>();

  @Input() buttonClasses: string = ''; // New Input for custom button classes

  readonly ChevronDownIcon = ChevronDownIcon;

  isOpen: boolean = false;
  searchText: string = '';
  selectedOptions: any[] = ['All'];

  constructor(
    private elementRef: ElementRef,
    public filterService: FilterService
  ) {}

  ngOnInit() {
    console.log('Options changed: ', this.options);
    this.selectedOptions = [...this.options];
    this.selectionChange.emit(this.selectedOptions); // Emit updated selection
    console.log('calling on on Init: ', this.displaySelectedOptions());
    this.displaySelectedOptions();
  }
  toggleDropdown() {
    this.isOpen = !this.isOpen;
  }

  filteredOptions() {
    return this.options.filter((option) =>
      option.option.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }

  toggleAllSelection() {
    if (this.isAllSelected()) {
      // Uncheck all options
      this.options.forEach((option) => (option.isChecked = false));
      this.selectedOptions = [];
    } else {
      // Check all options
      this.options.forEach((option) => (option.isChecked = true));
      this.selectedOptions = [...this.options];
    }
    this.selectionChange.emit(this.selectedOptions);
  }

  toggleOption(option: any) {
    option.isChecked = !option.isChecked;

    // Update selectedOptions based on current isChecked states
    this.selectedOptions = this.options.filter((opt) => opt.isChecked);

    this.isFilteredApplied = this.selectedOptions.length > 0;
    this.selectionChange.emit(this.selectedOptions);
  }

  isAllSelected() {
    return this.options.every((option) => option.isChecked);
  }

  removeSelection(option: any) {
    // Remove the option from the selected options list
    this.selectedOptions = this.selectedOptions.filter((opt) => opt.option !== option.option);
  
    // Update the 'isChecked' state for the options list
    const optionIndex = this.options.findIndex((opt) => opt.option === option.option);
    if (optionIndex !== -1) {
      this.options[optionIndex].isChecked = false;  // Uncheck the box for the removed option
    }
  
    // If there are no selected options, you may want to either deselect all or keep the previous selection
    if (this.selectedOptions.length === 0) {
      // Optionally reset to 'all selected' or other default behavior
      this.selectedOptions = [...this.options];
      this.options.forEach((opt) => (opt.isChecked = true)); // Check all options if needed
    }
  
    // Emit the selection change
    this.selectionChange.emit(this.selectedOptions);
  }

  displaySelectedOptions() {
    if (this.isAllSelected()) {
      return [
        {
          option: 'All',
        },
      ];
    } else if (this.selectedOptions.length <= 1) {
      return this.selectedOptions;
    } else {
      const displayedOptions = this.selectedOptions.slice(0, 1);

      const remainingCount = this.selectedOptions.length - 1;

      return [...displayedOptions, { option: `+${remainingCount}` }];
    }
  }

  // Close dropdown if clicked outside
  @HostListener('document:click', ['$event.target'])
  onClickOutside(targetElement: HTMLElement) {
    const clickedInside = this.elementRef.nativeElement.contains(targetElement);
    if (!clickedInside) {
      this.isOpen = false;
    }
  }
}
