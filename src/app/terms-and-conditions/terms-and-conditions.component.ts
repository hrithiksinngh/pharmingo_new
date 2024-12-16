import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-terms-and-conditions',
  standalone: true,
  imports: [CommonModule,FooterComponent,RouterLink],
  templateUrl: './terms-and-conditions.component.html',
  styleUrl: './terms-and-conditions.component.css',
})
export class TermsAndConditionsComponent {
  isMobileMenuOpen = false; // Add this line

  termsAndConditionsData = [
  
    {
      title: '1. Acceptance of Terms',
      description:
        'By using our website or purchasing any of our reports, you agree to these Terms and Conditions and our Privacy Policy. If you do not agree with any of these terms, please do not use our website or services.',
    },
    {
      title: '2. Services',
      description:
        "pharmingo provides customized data reports for purchase and download via our website. The reports cover various industry-related datasets such as market access, pricing, regulatory information, and more. The content and format of each report are customized based on the user's selection.",
    },
    {
      title: '3. Use of the Website',
      items: [
        'Provide accurate and current information when registering for an account or making a purchase.',
        'Maintain the confidentiality of your account and password.',
        'Use the website and services only for lawful purposes and in accordance with these Terms and Conditions.',
      ],
    },
    {
      title: '4. You must not:',
      items: [
        'Use the website in any way that violates applicable laws or regulations.',
        'Engage in any conduct that could damage, disable, or impair our website or services.',
        'Attempt to access or download any data or reports for which you have not paid or been granted permission.',
      ],
    },
    {
      title: '5. Purchases and Payments',
      items: [
        'All prices for reports are clearly displayed on our website and are subject to change without notice.',
        'Payment must be made at the time of purchase via the available payment methods. We use secure third-party payment processors to handle all transactions.',
        'Upon successful payment, you will receive a confirmation email and a link to download your report.',
      ],
    },
    {
      title: '6. Refund Policy',
      description:
        'Due to the nature of our service, all purchases of reports are final, and no refunds will be provided once the report has been downloaded. If there are technical issues or errors with the content of the report, please contact our support team within 7 days of purchase for assistance.',
    },
    {
      title: '7. License and Intellectual Property',
      items: [
        'All reports and content available for download through our website are owned by pharmingo and are protected by intellectual property laws. Upon purchase, you are granted a limited, non-exclusive, non-transferable license to use the report for personal or internal business purposes only.',
        'You may not distribute, resell, or share the purchased reports with third parties without explicit written permission from pharmingo.',
      ],
    },
    {
      title: '8. Disclaimer of Warranties',
      items: [
        'The reports and services provided by pharmingo are based on publicly available data and other sources deemed reliable. However, we do not guarantee the accuracy, completeness, or timeliness of the information contained in our reports.',
        'The reports are provided “as is” and “as available” without any warranties of any kind, either express or implied, including but not limited to warranties of merchantability, fitness for a particular purpose, or non-infringement.',
      ],
    },
    {
      title: '9. Limitation of Liability',
      items: [
        'To the maximum extent permitted by law, pharmingo will not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits, revenue, data, or use, arising from your use of the reports or services.',
        'Our liability for any claims arising from your use of the website or reports will be limited to the amount you paid for the report that gave rise to the claim.',
      ],
    },
    {
      title: '10. User-Generated Content',
      description:
        'If you post comments, feedback, or other content on our website, you grant pharmingo a non-exclusive, royalty-free, perpetual, and irrevocable right to use, reproduce, modify, and display such content.',
    },
    {
      title: '11. Termination',
      description:
        'We reserve the right to suspend or terminate your account or access to our website and services at any time, without notice, for any conduct that we believe violates these Terms and Conditions or is harmful to our interests or other users.',
    },
    {
      title: '12. Changes to Terms and Conditions',
      description:
        'pharmingo reserves the right to modify or update these Terms and Conditions at any time. Changes will be effective immediately upon posting on this page. Your continued use of the website after changes are posted constitutes your acceptance of the revised Terms and Conditions.',
    },
    {
      title: '13. Governing Law',
      description:
        'These Terms and Conditions are governed by and construed in accordance with the laws of the United Kingdom, without regard to its conflict of law principles. Any legal disputes arising from your use of the website or services will be subject to the exclusive jurisdiction of the courts located in London, United Kingdom.',
    },
    // {
    //   title: '14. Contact Us',
    //   description:
    //     'If you have any questions or concerns about these Terms and Conditions, please contact us at support@pharmingo.com.',
    // },
  ];


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
    // Prevent body scrolling when menu is open
    if (this.isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }
}
