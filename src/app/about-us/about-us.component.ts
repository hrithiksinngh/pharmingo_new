import { Component } from '@angular/core';
import { FooterComponent } from "../footer/footer.component";
import { Router, RouterLink } from '@angular/router';
import { NgClass, CommonModule } from '@angular/common'; // Add CommonModule

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [FooterComponent, RouterLink, NgClass, CommonModule], // Add CommonModule to imports
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css'
})
export class AboutUsComponent {
  isMobileMenuOpen = false;

  constructor(private router: Router) {}

  scrollToFragment(fragment: string) {
    this.isMobileMenuOpen = false; // Close menu when clicking a link
    document.body.style.overflow = 'auto';
    this.router.navigate(['/'], { fragment }).then(() => {
      const element = document.getElementById(fragment);
      if (element && fragment === "datasets") {
        window.scrollTo({
          top: 4600,
          behavior: 'smooth',
        });
      } else {
        window.scrollTo({
          top: 3300,
          behavior: 'smooth',
        });
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
