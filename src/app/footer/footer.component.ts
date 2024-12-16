import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {
  links = [
    { name: 'About Us', url: '/about-us' },
    { name: 'Build your Custom Reports', url: '/signup' },
    { name: 'Packages', url: '#packages' },
    { name: 'Privacy Policy', url: '/privacy-policy' },
    { name: 'Terms & Conditions', url: '/terms-and-conditions' },
  ];

  contactInfo = {
    address: 'Eastcastle House, 27/28 Eastcastle Street, London, W1W 8DH, UK ',
    email: 'support@pharmingo.com'
  };

  socialMedia = [
    { icon: 'linkedin_logo', url: 'https://www.linkedin.com/company/105786614' },
 
  ];
}
