import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LucideAngularModule, CheckIcon ,XIcon } from 'lucide-angular';
import { FilterService } from '../services/filter.service';

@Component({
  selector: 'app-select-topic',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './select-topic.component.html',
  styleUrl: './select-topic.component.css',
})
export class SelectTopicComponent {
  @Input() topics_1: any[] = [];
  @Input() topics_2: any[] = [];


  @Output() topicSelected = new EventEmitter<any>();

  @Output() navigateToPricing = new EventEmitter<void>();

  constructor(public filterService: FilterService) {}

  readonly CheckIcon = CheckIcon;
  readonly XIcon = XIcon;

  selectedTopicDetails: any;

  isViewDetailModalOpen = false;

  openViewDetailModal() {
    this.isViewDetailModalOpen = true;
  }
  closeViewDetailModal() {
    this.isViewDetailModalOpen = false;
  }

  selectTopic(topic: any) {
    this.topicSelected.emit(topic);
  }

  onNavigateToPricing() {
    this.navigateToPricing.emit();
  }

  handleCloseViewDetailModal() {
    this.closeViewDetailModal();
  }

  handleViewDetails(title:string) {
    this.openViewDetailModal();

    console.log('selectedTopic', title);
    if (
      title === 'Dosing' ||
      title === 'Regulatory Approvals'
    ) {
      this.selectedTopicDetails = this.topics_2.find(
        (topic) => topic.title === title
      );
    } else {
      this.selectedTopicDetails = this.topics_1.find(
        (topic) => topic.title === title
      );
    }
  }
}
