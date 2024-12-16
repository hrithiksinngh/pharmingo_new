import { CommonModule } from '@angular/common';
import {
  ChangeDetectorRef,
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
} from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HeroSectionComponent {
  constructor(private router: Router, private cdr: ChangeDetectorRef) {}

  currentSlide = 0; // Tracks the current visible slide
  nextSlide = -1; // Tracks the next slide to show
  isMobileMenuOpen = false;

  ngOnInit(): void {
    this.startAutoplay();
  }

  startAutoplay(): void {
    setInterval(() => {
      // Calculate the next slide index (looping back to 0 after the last slide)
      this.nextSlide = this.currentSlide === 3 ? 0 : this.currentSlide + 1;

      // After 1s (duration of the animation), update the current slide
      setTimeout(() => {
        this.currentSlide = this.nextSlide;  // Update the current slide after transition
        this.nextSlide = -1;  // Reset nextSlide
      }, 1000);  // This should match the duration of your slide-out animation
    }, 6000);  // Change slides every 5 seconds
  }

  scrollToFragment(fragment: string) {
    this.isMobileMenuOpen = false; // Close menu when clicking a link
    document.body.style.overflow = 'auto';
    this.router.navigate([], { fragment }).then(() => {
      const element = document.getElementById(fragment);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
    // Prevent body scrolling when menu is open
    if (this.isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }
}
