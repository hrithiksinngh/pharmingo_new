import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-market-access-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './market-access-section.component.html',
  styleUrl: './market-access-section.component.css',
})
export class MarketAccessSectionComponent {
  organizations_cards = [
    {
      title: 'Pharmaceutical Companies',
      description: 'Large, Mid-size and Emerging Pharmaceutical Companies',
      points: [
        {
          heading: 'Optimize pricing strategies',
          describe:
            'Utilize detailed pricing data to develop competitive pricing models that reflect market conditions and payer expectations ',
        },
        {
          heading: 'Enhance market access',
          describe:
            'Understand reimbursement pathways and payer criteria to support successful submission and access for your products',
        },
      ],
      image_expansion: 'org_1_expansion.webp',
      image: 'org_1.webp',
      bgColor: 'bg-[#264653]',
    },

    {
      title: 'Financial Services Organizations   ',
      description:
        'Investment Banks (M&A), Health Care Investment Funds, Private Equity Firms, Venture Capital Firms, Insurance Companies, Financial Analyst & Research Firms  ',

      points: [
        {
          heading: 'Informed investment decisions ',
          describe:
            '  Access market access data to assess the financial viability of pharmaceutical investments and inform portfolio management',
        },
        {
          heading: 'Risk assessment ',
          describe:
            'Utilize pricing data to evaluate potential risks and returns associated with new drug developments and market entries',
        },
      ],
      image_expansion: 'org_2_expansion.webp',
      image: 'org_2.webp',
      bgColor: 'bg-[#156082]',
    },

    {
      title: 'Educational Institutions  ',
      description:
        'Universities & Colleges, Research Institutions, Professional Training & Certification Programs, Policy Research Organisations, Online Learning Platforms ',

      points: [
        {
          heading: 'Research and curriculum development ',
          describe:
            'Incorporate real-world pricing and market access data into research initiatives and educational programs to prepare the next generation of healthcare professionals',
        },
        {
          heading: 'Policy analysis ',
          describe:
            'Leverage data for academic research on healthcare policy, pricing regulations, and market dynamics ',
        },
      ],
      image_expansion: 'org_3_expansion.webp',
      image: 'org_3.webp',
      bgColor: 'bg-[#2A9D8F]',
    },

    {
      title: 'Clinical Research Organizations ',
      description:
        'Full service CROs, Speciality CROs, Regulatory Affairs CROs, Health Economics and Outcomes Research CROs, Biostatistics & Data Analysis CROs, Consulting CROs',

      points: [
        {
          heading: 'Feasibility assessment',
          describe:
            'Utilize pricing and market access data to optimize clinical trial design and patient recruitment efficiency ',
        },
        {
          heading: 'Contextualize clinical trials',
          describe:
            'Understand pricing and reimbursement landscape to ensure clinical evidence aligns with market needs and payer expectations',
        },
      ],
      image_expansion: 'org_4_expansion.webp',
      image: 'org_4.webp',
      bgColor: 'bg-[#264653]',
    },

    {
      title: 'Biotech Firms ',
      description:
        'Clinical Stage Biotech Companies, Commercial Stage Biotech Companies, Emerging Biotech Startups, Specialty Biotech Firms, Orphan Drug Developers, Gene Therapy Companies, Biologics and Biosimilars Companies, Digital Health Biotech Firms',

      points: [
        {
          heading: 'Streamline commercialization',
          describe:
            'Access insights that help navigate the complexities of market access, enabling effective pricing strategies for new biotech innovations ',
        },
        {
          heading: 'Competitive benchmarking',
          describe:
            'Analyze competitor pricing and market positioning to identify opportunities for differentiation and growth',
        },
      ],
      image_expansion: 'org_5_expansion.webp',
      image: 'org_5.webp',
      bgColor: 'bg-[#156082]',
    },
  ];

  openedCardIndex : any = -1; // First card is open by default

  toggleCard(index: number): void {
    this.openedCardIndex = index;
  }


  hoveredCardIndex: number | null = null;

  hoverCard(index: number | null): void {
    this.hoveredCardIndex = index;
  }

  getCardBackground(index: number): string {
    return this.hoveredCardIndex === index
      ? `../../assets/${this.organizations_cards[index].image_expansion}`
      : `../../assets/${this.organizations_cards[index].image}`;
  }

  
}
