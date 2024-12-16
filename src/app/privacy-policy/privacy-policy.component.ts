import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FooterComponent } from "../footer/footer.component";
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-privacy-policy',
  standalone: true,
  imports: [CommonModule,FooterComponent,RouterLink],
  templateUrl: './privacy-policy.component.html',
  styleUrl: './privacy-policy.component.css',
})
export class PrivacyPolicyComponent {
  isMobileMenuOpen = false; // Add this line

  privacyPolicyDetails = [
    {
      title: '1. Information We Collect:',
      items: [
        'Personal Data: We may collect information like your name, email address, phone number, and payment details.',
        'Non-Personal Data: This may include your IP address, browser type, and usage data to improve our website performance.',
        'Payment Information: We use third-party payment processors to securely handle payment transactions, and we do not store your payment card details.',
      ],
    },
    {
      title: '2. How We Use Your Information:',
      items: [
        'To process your report purchases and deliver customized data reports.',
        'To communicate with you about your account, orders, and updates to our services.',
        'To improve our website and services based on usage data.',
        'To comply with legal requirements and enforce our terms of service.',
      ],
    },
    {
      title: '3. Sharing Your Information',
      items: [
        'We do not sell or rent your personal information.',
        'We may share your data with service providers, such as payment processors and cloud storage providers, to facilitate transactions and ensure secure storage.',
        'We may disclose your information if required by law or in response to legal requests from public authorities.',
      ],
    },
    {
      title: '4. Your Rights and Choices',
      description:
        'You have the right to access, correct, or delete your personal data, and to opt-out of marketing communications. For requests, contact us at ',
    },
    {
      title: '5. Data Security',
      description:
        'We use appropriate measures to protect your data, but cannot guarantee absolute security due to the nature of online data transmission.',
    },
    {
      title: '6. Cookies and Tracking Technologies',
      description:
        'We use cookies and tracking technologies to enhance your website experience. You can adjust your browser settings to decline cookies, but this may affect functionality.',
    },
    {
      title: '7. Data Retention',
      description:
        'We retain your personal data as long as necessary to provide our services, comply with legal obligations, resolve disputes, and enforce our agreements.',
    },
    {
      title: '8. International Data Transfers',
      description:
        'If you access our services from outside the United Kingdom, your data may be transferred to and processed in countries with different data protection laws. By using our website, you consent to this transfer.',
    },
    {
      title: '9. Children’s Privacy',
      description:
        'Our services are not intended for individuals under the age of 18. We do not knowingly collect personal information from minors. Please contact us if you believe we have collected data from a minor.',
    },
    {
      title: '10. Changes to This Privacy Policy',
      description:
        'We may update this Privacy Policy periodically. Any changes will be posted on this page. Please review this policy regularly to stay informed.',
    },
    // {
    //   title: '11. Contact Us',
    //   description:
    //     'If you have any questions or concerns about this Privacy Policy or how we handle your data, please contact us at support@pharmingo.com.',
    // },
  ];


  constructor(private router: Router) {}

  scrollToFragment(fragment: string) {
    this.router.navigate(['/'], { fragment }).then(() => {
      const element = document.getElementById(fragment);
      if (element && fragment === "datasets") {
      
        window.scrollTo({
          top: 4600,
          behavior: 'smooth',
        });
      }else{
        window.scrollTo({
          top: 3300,
          behavior: 'smooth',
        });
      }
    });
  }

  toggleMobileMenu() { // Add this method
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
    if (this.isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }
}
