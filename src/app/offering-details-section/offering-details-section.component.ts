import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LucideAngularModule, CheckIcon, XIcon } from 'lucide-angular';

type SelectedContentType = {
  title: string;
  tabTitle: string;
  featureImage: string;
  heading: string;
  description: string;
  points: Array<{
    describe: string;
  }>;
  features: Array<{
    image: string;
    title: string;
    description: string;
  }>;
  dataAccessPoints: Array<{
    name: string;
    isSpecific: boolean;
  }>;
  details: Array<{
    field: string;
    field_description: string;
  }>;
};

type OfferingDataType = {
  title: string;
  tabTitle: string;
  featureImage: string;
  heading: string;
  description: string;
  points: Array<{
    describe: string;
  }>;
  features: Array<{
    image: string;
    title: string;
    description: string;
  }>;
  dataAccessPoints: Array<{
    name: string;
    isSpecific: boolean;
  }>;
  details: Array<{
    field: string;
    field_description: string;
  }>;
};

@Component({
  selector: 'app-offering-details-section',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './offering-details-section.component.html',
  styleUrl: './offering-details-section.component.css',
})
export class OfferingDetailsSectionComponent {
  readonly CheckIcon = CheckIcon;
  readonly XIcon = XIcon;

  // Offerings data
  offeringsCardData = [
    {
      title: 'Pricing data',
      tabTitle: 'Pricing',
      featureImage: 'offering_pricing.webp',
      heading: 'Comprehensive pricing data for strategic success ',
      description:
        'With our reliable data, you can make informed decisions that maximize market penetration, support reimbursement, and drive commercial success ',
      points: [
        {
          describe:
            'Our pricing data equips you with the insights to navigate complex global markets and develop competitive pricing strategies ',
        },
        {
          describe:
            'Optimize pricing strategy with evidence-based decisions aligned to market landscape ',
        },
      ],
      features: [
        {
          image: 'pf_1.png',
          title: 'Customize reports  ',
          description:
            'Focus on the data most relevant to your business questions ',
        },
        {
          image: 'pf_2.png',
          title: 'Tailored pricing strategies',
          description:
            'Tailor your pricing approach with data that reflects pricing trends and level of reimbursement  ',
        },
        {
          image: 'pf_3.png',
          title: 'Global pricing insights  ',
          description:
            'Access up-to-date pricing data across multiple markets, helping you benchmark against competitors and align with local health care systems',
        },
      ],

      dataAccessPoints: [
        {
          name: 'Country',
          isSpecific: false,
        },
        {
          name: 'Brand Name',
          isSpecific: false,
        },
        {
          name: 'INN',
          isSpecific: false,
        },
        {
          name: 'MOA',
          isSpecific: false,
        },
        {
          name: 'Pack Description',
          isSpecific: false,
        },
        {
          name: 'Company',
          isSpecific: false,
        },
        {
          name: 'Brand Category',
          isSpecific: false,
        },
        {
          name: 'Therapy Class',
          isSpecific: false,
        },
        {
          name: 'WHOATC',
          isSpecific: false,
        },
        {
          name: 'Orphan Status',
          isSpecific: false,
        },
        {
          name: 'Price Start Date',
          isSpecific: true,
        },
        {
          name: 'Currency',
          isSpecific: true,
        },
        {
          name: 'Ex Factory',
          isSpecific: true,
        },
        {
          name: 'Hospital',
          isSpecific: true,
        },
        {
          name: 'PPP',
          isSpecific: true,
        },

        {
          name: 'PP Inc VAT',
          isSpecific: true,
        },
        {
          name: 'Reimbursement Price',
          isSpecific: true,
        },

        {
          name: 'Co-pay Price',
          isSpecific: true,
        },
        {
          name: 'Formulary Reimbursement Classification',
          isSpecific: true,
        },
        {
          name: 'Source Update Date',
          isSpecific: true,
        },
      ],
      details: [
        {
          field: 'Country',
          field_description: 'Name of the country',
        },
        {
          field: 'Brand name',
          field_description: 'Standardized Brand Name',
        },
        {
          field: 'INN',
          field_description: 'Active Ingredient',
        },
        {
          field: 'MOA',
          field_description: 'Mechanism of Action',
        },
        {
          field: 'Pack description',
          field_description:
            'Brand name + Formulation + Strength + Strength unit + Fill size + Fill unit + Pack Size + Pack Unit',
        },
        {
          field: 'Company',
          field_description: 'Standardized Company Name',
        },
        {
          field: 'Brand Category',
          field_description: 'Brand Type (Branded, Biosimilar)',
        },
        {
          field: 'Therapy Class',
          field_description: 'Therapeutic Area',
        },
        {
          field: 'WHOATC',
          field_description: 'Alphanumeric Code Published By WHO',
        },
        {
          field: 'Orphan Status',
          field_description:
            'Orphan Drug Designation (Yes Or No) applicable to specific region',
        },
        {
          field: 'Price Start Date',
          field_description: 'Price Effective Date',
        },
        {
          field: 'Currency',
          field_description: 'Standard Currency Code',
        },
        {
          field: 'Ex Factory',
          field_description: 'Manufacturer Price Excluding VAT',
        },
        {
          field: 'Hospital',
          field_description: 'Purchasing Price for Hospitals',
        },
        {
          field: 'PPP',
          field_description:
            'Pharmacy Purchase Price Without VAT / Wholesaler price',
        },
        {
          field: 'PP Inc Vat',
          field_description:
            'Public Price Including VAT / Retail price with VAT',
        },
        {
          field: 'Formulary Reimbursement Classification',
          field_description:
            'Pack-level Reimbursement Status (Reimbursed, Reimbursed with Restrictions, Not Reimbursed)',
        },
        {
          field: 'Reimbursement Price',
          field_description:
            'Price at pack level to be reimbursed by statutory mechanisms; according to level of reimbursement',
        },
        {
          field: 'Co-pay Price',
          field_description:
            'Out of pocket pack level price to be paid by the customer/patient',
        },
        {
          field: 'Source Update Date',
          field_description:
            'Publication date of the latest information on country source',
        },
      ],
    },
    {
      title: 'Market Access data',
      tabTitle: 'Market Access',
      featureImage: 'offering_hta.webp',
      heading: 'Unlock the power of HTA Data for strategic market access',
      description:
        'Empower your market access strategy with detailed, accurate HTA data that drives success in pricing, reimbursement, and patient access',
      points: [
        {
          describe:
            'Our comprehensive HTA data provides the insights you need to navigate reimbursement decisions and price negotiations effectively',
        },
        {
          describe:
            'With HTA reports from 31 countries, you can compare criteria and outcomes to fine-tune your strategy, ensuring that your products align to payer expectations and maximize access potential',
        },
      ],
      features: [
        {
          image: 'hta_1.png',
          title: 'Tailored reports',
          description:
            'Customize HTA data based on specific markets or therapeutic areas to get the most relevant insights for your needs',
        },
        {
          image: 'hta_2.png',
          title: 'Global HTA insights',
          description:
            'Gain access to key components of HTA decisions from major markets, including restrictions to reimbursement, economic & clinical benefit and market-specific outcomes',
        },
        {
          image: 'hta_3.png',
          title: 'Optimize market entry',
          description:
            'Utilize HTA insights to predict challenges, benchmark submissions, and maximize reimbursement opportunities',
        },
      ],
      dataAccessPoints: [
        {
          name: 'Country',
          isSpecific: false,
        },
        {
          name: 'Brand Name',
          isSpecific: false,
        },
        {
          name: 'INN',
          isSpecific: false,
        },
        {
          name: 'MOA',
          isSpecific: false,
        },
        {
          name: 'Pack Description',
          isSpecific: false,
        },
        {
          name: 'Company',
          isSpecific: false,
        },
        {
          name: 'Brand Category',
          isSpecific: false,
        },
        {
          name: 'Therapy Class',
          isSpecific: false,
        },
        {
          name: 'WHOATC',
          isSpecific: false,
        },
        {
          name: 'Orphan Status',
          isSpecific: false,
        },
        {
          name: 'Top Level Indication',
          isSpecific: true,
        },
        {
          name: 'Regulatory Indication',
          isSpecific: true,
        },
        {
          name: 'Indication HTA',
          isSpecific: true,
        },
        {
          name: 'National HTA Body',
          isSpecific: true,
        },
        {
          name: 'Assessment Publication Data',
          isSpecific: true,
        },
        {
          name: 'Local Decision',
          isSpecific: true,
        },
        {
          name: 'Standardized Decision',
          isSpecific: true,
        },
        {
          name: 'Clinical Reason',
          isSpecific: true,
        },
        {
          name: 'Economic Reason',
          isSpecific: true,
        },
        {
          name: 'Comparator',
          isSpecific: true,
        },
        {
          name: 'Utilisation Restrictions',
          isSpecific: true,
        },
      ],
      details: [
        {
          field: 'Country',
          field_description: 'Name of the country',
        },
        {
          field: 'Brand name',
          field_description: 'Standardized Brand Name',
        },
        {
          field: 'INN',
          field_description: 'Active Ingredient',
        },
        {
          field: 'MOA',
          field_description: 'Mechanism of Action',
        },
        {
          field: 'Pack description',
          field_description:
            'Brand name + Formulation + Strength + Strength unit + Fill size + Fill unit + Pack Size + Pack Unit',
        },
        {
          field: 'Company',
          field_description: 'Standardized Company Name',
        },
        {
          field: 'Brand Category',
          field_description: 'Brand Type (Branded, Biosimilar)',
        },
        {
          field: 'Therapy Class',
          field_description: 'Therapeutic Area',
        },
        {
          field: 'WHOATC',
          field_description: 'Alphanumeric Code Published By WHO',
        },
        {
          field: 'Orphan Status',
          field_description:
            'Orphan Drug Designation (Yes Or No) applicable to specific region',
        },
        {
          field: 'Top Level Indication',
          field_description:
            'A unique form or finest form of indication. Every indication has unique TLI',
        },
        {
          field: 'Regulatory Indication',
          field_description:
            'Indication approved by regulatory authority of a country and is extracted as mentioned in regulatory label with all key information as patient population, any restrictions etc. with proper grammatical sense and complete details (especially for those captured after translation)',
        },
        {
          field: 'Indication HTA',
          field_description:
            'The indication for which the HTA body issued a recommendation. It specifies which condition the drug is recommended or not recommended to treat, and may also specify which age group is recommended to treat',
        },
        {
          field: 'National HTA Body',
          field_description:
            'Abbreviation of the HTA body corresponding to the particular country',
        },
        {
          field: 'Assessment Publication Date',
          field_description: 'Date when the decision was issued',
        },
        {
          field: 'Local Decision',
          field_description:
            'Recommendation or Not Recommendation of reimbursement of a medicine for a particular indication (HTA)',
        },
        {
          field: 'Standardised Decision',
          field_description:
            'There are 3 possible decisions: Recommended, Restricted Recommended, or Not Recommended (for reimbursement)',
        },
        {
          field: 'Clinical Reason',
          field_description:
            'Clinical reason behind the decision of the HTA body',
        },
        {
          field: 'Economic Reason',
          field_description: 'If the assessed drug has value for money',
        },
        {
          field: 'Comparator',
          field_description:
            'The drug that is used for comparison in the Clinical and/or Economical Analysis',
        },
        {
          field: 'Utilisation Restrictions',
          field_description:
            'If the drug will be used with restrictions (Example: to be used only for 2 years)',
        },
      ],
    },
    {
      title: 'Treatment Cost data',
      tabTitle: 'Treatment Cost',
      featureImage: 'offering_cot.webp',
      heading:
        'Maximize market access with in-depth cost of treatment insights for strategic pricing',
      description:
        'Make informed decisions with accurate cost of treatment data to drive successful market access and optimize pricing strategies',
      points: [
        {
          describe:
            'Our detailed cost of treatment data will provide the insights necessary to assess financial implications, optimize pricing models, and enhance reimbursement negotiations',
        },
        {
          describe:
            'Leverage our cost of treatment data to make informed decisions that improve market access, enhance patient care, and support sustainable health care practices',
        },
      ],
      features: [
        {
          image: 'cot_1.png',
          title: 'Customizable reports',
          description:
            'Create tailored reports that focus on specific treatment pathways, patient populations, or geographical areas to enhance the relevance of your insights',
        },
        {
          image: 'cot_2.png',
          title: 'Informed reimbursement negotiations',
          description:
            'Equip your team with the data needed to substantiate pricing proposals during negotiations with payers',
        },
        {
          image: 'cot_3.png',
          title: 'Global coverage',
          description:
            'Analyze treatment costs from multiple countries and regions, helping you tailor your market access strategy for specific health care systems',
        },
      ],
      dataAccessPoints: [
        {
          name: 'Country',
          isSpecific: false,
        },
        {
          name: 'Brand Name',
          isSpecific: false,
        },
        {
          name: 'INN',
          isSpecific: false,
        },
        {
          name: 'MOA',
          isSpecific: false,
        },
        {
          name: 'Pack Description',
          isSpecific: false,
        },
        {
          name: 'Company',
          isSpecific: false,
        },
        {
          name: 'Brand Category',
          isSpecific: false,
        },
        {
          name: 'Therapy Class',
          isSpecific: false,
        },
        {
          name: 'WHOATC',
          isSpecific: false,
        },
        {
          name: 'Orphan Status',
          isSpecific: false,
        },
        {
          name: 'Top Level Indication',
          isSpecific: true,
        },
        {
          name: 'Regulatory Indication',
          isSpecific: true,
        },
        {
          name: 'Currency',
          isSpecific: true,
        },
        {
          name: 'Pack Price',
          isSpecific: true,
        },
        {
          name: 'Per Day (including wastage)',
          isSpecific: true,
        },
        {
          name: 'Per Month (including wastage)',
          isSpecific: true,
        },
        {
          name: 'Per Annum (including wastage)',
          isSpecific: true,
        },
        {
          name: 'Per Duration (including wastage)',
          isSpecific: true,
        },
      ],
      details: [
        {
          field: 'Country',
          field_description: 'Name of the country',
        },
        {
          field: 'Brand name',
          field_description: 'Standardized Brand Name',
        },
        {
          field: 'INN',
          field_description: 'Active Ingredient',
        },
        {
          field: 'MOA',
          field_description: 'Mechanism of Action',
        },
        {
          field: 'Pack description',
          field_description:
            'Brand name + Formulation + Strength + Strength unit + Fill size + Fill unit + Pack Size + Pack Unit',
        },
        {
          field: 'Company',
          field_description: 'Standardized Company Name',
        },
        {
          field: 'Brand Category',
          field_description: 'Brand Type (Branded, Biosimilar)',
        },
        {
          field: 'Therapy Class',
          field_description: 'Therapeutic Area',
        },
        {
          field: 'WHOATC',
          field_description: 'Alphanumeric Code Published By WHO',
        },
        {
          field: 'Orphan Status',
          field_description:
            'Orphan Drug Designation (Yes Or No) applicable to specific region',
        },
        {
          field: 'Top Level Indication',
          field_description:
            'A unique form or finest form of indication. Every indication has unique TLI',
        },
        {
          field: 'Regulatory Indication',
          field_description:
            'Indication approved by regulatory authority of a country and is extracted as mentioned in regulatory label with all key information as patient population, any restrictions etc. with proper grammatical sense and complete details (especially for those captured after translation)',
        },
        {
          field: 'Currency',
          field_description: 'Standard Currency Code',
        },
        {
          field: 'Pack Price',
          field_description:
            'Price of pack as a whole, it is equal to a particular price level (Ex factory/Hospital Price/Pharmacy Purchase Price Without VAT)',
        },
        {
          field: 'Per Day (Including Wastage)',
          field_description:
            'Cost of treatment for a particular indication for one day including wastage',
        },
        {
          field: 'Per Month (Including Wastage)',
          field_description:
            'Cost of treatment for a particular indication for one month including wastage',
        },
        {
          field: 'Per Annum (Including Wastage)',
          field_description:
            'Cost of treatment for a particular indication for one year including wastage',
        },
        {
          field: 'Per Duration (Including Wastage)',
          field_description:
            'Cost of treatment for a particular indication for a particular duration including wastage which is less than or more than one year',
        },
      ],
    },
    {
      title: 'Dosing Assumptions data',
      tabTitle: 'Dosing Assumptions',
      featureImage: 'offering_dosing.webp',
      heading: 'Accurate dosing data for confident market access decisions',
      description:
        'Make informed decisions with reliable dosing data that ensures your products meet the requirements of healthcare providers and regulatory bodies',
      points: [
        {
          describe:
            'Ensure that your market access strategies are backed by precise, up-to-date dosing information',
        },
        {
          describe:
            'Our comprehensive dosing data covers a wide range of therapeutic areas, providing insights into standard dosing regimens, recommended starting doses, and adjustments based on specific patient populations',
        },
      ],
      features: [
        {
          image: 'dos_1.png',
          title: 'Comprehensive coverage',
          description:
            'Access dosing data across multiple therapeutic areas, including dosage forms, strengths, and frequency',
        },
        {
          image: 'dos_2.png',
          title: 'Global insights',
          description:
            'Compare dosing standards and variations across markets and regions for more strategic decision-making',
        },
        {
          image: 'dos_3.png',
          title: 'Updated regularly',
          description:
            'Our data is continuously updated to reflect the latest regulatory approvals',
        },
      ],
      dataAccessPoints: [
        {
          name: 'Country',
          isSpecific: false,
        },
        {
          name: 'Brand Name',
          isSpecific: false,
        },
        {
          name: 'INN',
          isSpecific: false,
        },
        {
          name: 'MOA',
          isSpecific: false,
        },
        {
          name: 'Pack Description',
          isSpecific: false,
        },
        {
          name: 'Company',
          isSpecific: false,
        },
        {
          name: 'Brand Category',
          isSpecific: false,
        },
        {
          name: 'Therapy Class',
          isSpecific: false,
        },
        {
          name: 'WHOATC',
          isSpecific: false,
        },
        {
          name: 'Orphan Status',
          isSpecific: false,
        },
        {
          name: 'Top Level Indication',
          isSpecific: true,
        },
        {
          name: 'Regulatory Indication',
          isSpecific: true,
        },
        {
          name: 'Loading Dosing',
          isSpecific: true,
        },
        {
          name: 'Maintenance Dosing',
          isSpecific: true,
        },
        {
          name: 'Loading Dosing Frequency',
          isSpecific: true,
        },
        {
          name: 'Loading Dosing Frequency Unit',
          isSpecific: true,
        },

        {
          name: 'Maintenance Dosing Frequency Unit',
          isSpecific: true,
        },
        {
          name: 'Maintenance Dosing Frequency',
          isSpecific: true,
        },
        {
          name: 'Loading Dosing Duration',
          isSpecific: true,
        },
        {
          name: 'Loading Dosing Duration Unit',
          isSpecific: true,
        },

        {
          name: 'Maintenance Dosing Duration Unit',
          isSpecific: true,
        },
        {
          name: 'Maintenance Dosing Duration',
          isSpecific: true,
        },
        {
          name: 'Body Surface Area',
          isSpecific: true,
        },
        {
          name: 'Average Weight',
          isSpecific: true,
        },
      ],
      details: [
        {
          field: 'Country',
          field_description: 'Name of the country',
        },
        {
          field: 'Brand name',
          field_description: 'Standardized Brand Name',
        },
        {
          field: 'INN',
          field_description: 'Active Ingredient',
        },
        {
          field: 'MOA',
          field_description: 'Mechanism of Action',
        },
        {
          field: 'Pack description',
          field_description:
            'Brand name + Formulation + Strength + Strength unit + Fill size + Fill unit + Pack Size + Pack Unit',
        },
        {
          field: 'Company',
          field_description: 'Standardized Company Name',
        },
        {
          field: 'Brand Category',
          field_description: 'Brand Type (Branded, Biosimilar)',
        },
        {
          field: 'Therapy Class',
          field_description: 'Therapeutic Area',
        },
        {
          field: 'WHOATC',
          field_description: 'Alphanumeric Code Published By WHO',
        },
        {
          field: 'Orphan Status',
          field_description:
            'Orphan Drug Designation (Yes Or No) applicable to specific region',
        },
        {
          field: 'Top Level Indication',
          field_description:
            'A unique form or finest form of indication. Every indication has unique TLI',
        },
        {
          field: 'Regulatory Indication',
          field_description:
            'Indication approved by regulatory authority of a country and is extracted as mentioned in regulatory label with all key information as patient population, any restrictions etc. with proper grammatical sense and complete details (especially for those captured after translation)',
        },
        {
          field: 'Loading Dosing',
          field_description:
            'Initial higher dose of a drug that may be given at the beginning of a course of treatment before dropping down to a lower maintenance dose',
        },
        {
          field: 'Maintenance Dosing',
          field_description:
            'Steady and constant dose given with only one dosing frequency',
        },
        {
          field: 'Loading Dosing Frequency',
          field_description: 'Frequency at which loading dose is administered',
        },
        {
          field: 'Loading Dosing Frequency Unit',
          field_description:
            'Unit for loading dose frequency e.g. day, week, month or year',
        },
        {
          field: 'Maintenance Dosing Frequency',
          field_description:
            'Frequency at which maintenance dose is administered',
        },
        {
          field: 'Maintenance Dosing Frequency Unit',
          field_description:
            'Unit for maintenance dose frequency e.g. day, week, month or year',
        },
        {
          field: 'Loading Dosing Duration',
          field_description:
            'Time from the start of first loading dose to switching on to maintenance therapy',
        },
        {
          field: 'Loading Dosing Duration Unit',
          field_description:
            'Unit for loading dose duration e.g. day, week, month or year',
        },
        {
          field: 'Maintenance Dosing Duration',
          field_description: 'Time to continue therapy at maintenance dose',
        },
        {
          field: 'Maintenance Dosing Duration Unit',
          field_description:
            'Unit for maintenance dose duration e.g. day, week, month or year',
        },
        {
          field: 'Body Surface Area',
          field_description:
            'When drug dose depends upon body surface area of patient, body surface area in meters squared is populated',
        },
        {
          field: 'Average Weight',
          field_description:
            'When drug dose depends upon body weight of patient, average body weight in kilograms is populated',
        },
      ],
    },
    {
      title: 'Regulatory data',
      tabTitle: 'Regulatory Data',
      featureImage: 'offering_regulatory.webp',
      heading:
        'Navigate global markets with comprehensive regulatory approval data',
      description:
        'With our reliable, up-to-date regulatory approval data, you can ensure your pricing and market access strategies are relevant to the current treatment landscape',
      points: [
        {
          describe:
            'Our regulatory approval data will provide you with the insights you need to build a strong foundation for pricing and market access strategies',
        },
        {
          describe:
            'Anticipate and navigate competition to optimize strategy across markets',
        },
      ],
      features: [
        {
          image: 'reg_1.png',
          title: 'Customizable reports',
          description:
            'Tailor your regulatory data report to focus on the most relevant information for your strategy',
        },
        {
          image: 'reg_2.png',
          title: 'Boost market access',
          description:
            'Stay informed about the latest regulatory decisions to enhance your market access strategy',
        },
        {
          image: 'reg_3.png',
          title: 'Optimize pricing strategies',
          description:
            'Leverage regulatory approval data to align your pricing models with market landscape, ensuring all scenarios are covered',
        },
      ],
      dataAccessPoints: [
        {
          name: 'Country',
          isSpecific: false,
        },
        {
          name: 'Brand Name',
          isSpecific: false,
        },
        {
          name: 'INN',
          isSpecific: false,
        },
        {
          name: 'MOA',
          isSpecific: false,
        },
        {
          name: 'Pack Description',
          isSpecific: false,
        },
        {
          name: 'Company',
          isSpecific: false,
        },
        {
          name: 'Brand Category',
          isSpecific: false,
        },
        {
          name: 'Therapy Class',
          isSpecific: false,
        },
        {
          name: 'WHOATC',
          isSpecific: false,
        },
        {
          name: 'Orphan Status',
          isSpecific: false,
        },
        {
          name: 'Top Level Indication',
          isSpecific: true,
        },
        {
          name: 'Regulatory Indication',
          isSpecific: true,
        },
        {
          name: 'Line of Therapy',
          isSpecific: true,
        },
        {
          name: 'Regulatory Agency',
          isSpecific: true,
        },
        {
          name: 'Indication Approval Date',
          isSpecific: true,
        },
      ],
      details: [
        {
          field: 'Country',
          field_description: 'Name of the country',
        },
        {
          field: 'Brand name',
          field_description: 'Standardized Brand Name',
        },
        {
          field: 'INN',
          field_description: 'Active Ingredient',
        },
        {
          field: 'MOA',
          field_description: 'Mechanism of Action',
        },
        {
          field: 'Pack description',
          field_description:
            'Brand name + Formulation + Strength + Strength unit + Fill size + Fill unit + Pack Size + Pack Unit',
        },
        {
          field: 'Company',
          field_description: 'Standardized Company Name',
        },
        {
          field: 'Brand Category',
          field_description: 'Brand Type (Branded, Biosimilar)',
        },
        {
          field: 'Therapy Class',
          field_description: 'Therapeutic Area',
        },
        {
          field: 'WHOATC',
          field_description: 'Alphanumeric Code Published By WHO',
        },
        {
          field: 'Orphan Status',
          field_description:
            'Orphan Drug Designation (Yes Or No) applicable to specific region',
        },
        {
          field: 'Top Level Indication',
          field_description:
            'A unique form or finest form of indication. Every indication has unique TLI',
        },
        {
          field: 'Regulatory Indication',
          field_description:
            'Indication approved by regulatory authority of a country and is extracted as mentioned in regulatory label with all key information as patient population, any restrictions etc. with proper grammatical sense and complete details (especially for those captured after translation)',
        },
        {
          field: 'Line Of Therapy',
          field_description:
            'Line of therapy expresses the sequence of therapies a patient undergoes',
        },
        {
          field: 'Regulatory Agency',
          field_description:
            'Regulatory authorities responsible for approval of drugs in that country (mainly written abbreviated forms)',
        },
        {
          field: 'Indication Approval Date',
          field_description:
            'Date on which regulatory authority approved the respective indication for the brand',
        },
      ],
    },
  ];

  // Selected tab and content
  selectedTab: string = 'Pricing';
  selectedContent = this.offeringsCardData.find(
    (tab) => tab.tabTitle === this.selectedTab
  );

  // Method to handle tab selection
  selectTab(newTabTitle: string): void {
    this.selectedTab = newTabTitle;
    this.selectedContent = this.offeringsCardData.find(
      (tab) => tab.tabTitle === newTabTitle
    );
    // Trigger re-animation
    const contentCard = document.getElementById('content-card');
    if (contentCard) {
      contentCard.classList.remove('animate-slideUp'); // Remove class
      contentCard.classList.add('animate-fadeOut'); // Remove class
      void contentCard.offsetWidth; // Trigger reflow (forces the browser to re-render)
      contentCard.classList.add('animate-slideUp'); // Re-add class
    }
  }

  isViewDetailModalOpen = false;
  selectedTopicDetails: any;

  openViewDetailModal() {
    this.isViewDetailModalOpen = true;
  }
  closeViewDetailModal() {
    this.isViewDetailModalOpen = false;
  }

  handleViewDetails(title: any) {
    this.openViewDetailModal();

    console.log('selectedTopic', title);

    if (this.selectedContent && this.selectedContent.tabTitle === title) {
      this.selectedTopicDetails = this.selectedContent;
    }
  }
}
