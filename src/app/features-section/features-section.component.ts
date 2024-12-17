import { Component, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-features-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './features-section.component.html',
  styleUrl: './features-section.component.css'
})
export class FeaturesSectionComponent implements OnInit {
  isMobileOrTabletView: boolean = false;
  openedCardIndex: number | null = null;
  hoveredCardIndex: number | null = null;

  ngOnInit(): void {
    this.checkViewport();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any): void {
    this.checkViewport();
  }

  checkViewport(): void {
    this.isMobileOrTabletView = window.innerWidth <= 1024;
  }

  toggleCard(index: number): void {
    if (this.isMobileOrTabletView) {
      if (this.openedCardIndex === index) {
        this.openedCardIndex = null;
      } else {
        this.openedCardIndex = index;
      }
      this.hoveredCardIndex = null; // Reset hovered card index
    }
  }

  hoverCard(index: number | null): void {
    if (!this.isMobileOrTabletView) {
      this.hoveredCardIndex = index;
    }
  }
}
