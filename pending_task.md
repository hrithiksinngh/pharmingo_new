

[✅] Select Topic and Select package remove background color on hover

[✅] selection criteria change name casing to First Second (for whotac , indication, moa)

[✅] Space between table and filters 

[✅] Apply filter should be disabled by default

[✅] Apply Seperate condition to fetch data from pricing view in case of indication filter

    top_level_indication  
    brand_name
    and use brand_names to fetch data from pricing

[✅] Create seperate views for fetching selection criteria data (whoatc , indication ,moa)
 
[✅] Pricing Topic Column Order
      Exfactory first  then hospital in column name order

[✅] Dosing Topic Column Order 
     whoatc_name an orphan status after therapy_class_name

[✅] Cot View Column Order after per_pack comes price_type

[✅] In all tables View change True --> yes and False ----> no

[✅ ] Need to add condition for all view except indication view to exclude data for which pack description is null

[pending] handle null data in same way for all data endpoints and all topics, I would prefer to have N/A for all blank and null values 



[✅ ] Test report generation for  this  (indication , melanoma)

[✅] After Report Building completes , mark step-5 complete

[✅] Add Date formatting on purchase history preview table data

[✅] Show tooltip in hover of eyeicon

[✅] For help Section just add "For assistance, please reach out to our support team at support@pharmingo.com

[✅] Need to add disclaimer for data lag



#############################################################################
[✅ ]
Column value mask in preview:
Pricing:
 
Ex Factory
Hospital
PPP
PP Inc Vat
Formulary Reimbursement Classification
Reimbursement Price
Co-pay Price
 
Dosing:
 
Loading Dosing
Maintenance Dosing
Loading Dosing Frequency
Maintenance Dosing Frequency
Loading Dosing Duration
Maintenance Dosing Duration
Body Surface Area
Average Weight
 
HTA:
 
National HTA Body
Assessment Publication Date
Local Decision
Standardised Decision
Clinical Reason
Economic Reason
Comparator
Utilisation Restrictions
 
COT:
 
Pack Price
Per Day (Including Wastage)
Per Month  (Including Wastage)
Per Annum  (Including Wastage)
Per Duration  (Including Wastage)
 
Regulatory
 
Top Level Indication
Regulatory Indication
Line Of Therapy
Regulatory Agency
Indication Approval Date


#############################################################################



Low priority

[✅] Manage order for columns correctly 

[ ] Try to persist column selection in first time

[✅] Dropdown show on click of text as well instaed of arrow

[✅] Add ... for long text

[✅] Remove back option from last step

[✅] Format date column for all data

[ ] Need to check Reciept of payment is not getting gerated and shared on email after purchase


[✅] MOA ,INN , WHOATC Name

[✅] add help icon

[✅] numeric values in table right align

[✅] change top_level_indication to indication in all views





##################################################################
Pricing data


Comprehensive pricing data for strategic success 

With our reliable data, you can make informed decisions that maximize market penetration, support reimbursement, and drive commercial success 

1. Our pricing data equips you with the insights to navigate complex global markets and develop competitive pricing strategies  

2. Optimize pricing strategy with evidence-based decisions aligned to market landscape  

 

 

Customize reports  

Focus on the data most relevant to your business questions 


Tailored pricing strategies 

Tailor your pricing approach with data that reflects pricing trends and level of reimbursement  


Global pricing insights  

Access up-to-date pricing data across multiple markets, helping you benchmark against competitors and align with local health care systems. 


const names = [
  "Country",
  "Brand Name",
  "INN",
  "MOA",
  "Pack Description",
  "Company",
  "Brand Category",
  "Therapy Class",
  "WHOATC",
  "Orphan Status",
  "Price Start Date",
  "Currency",
  "Ex Factory",
  "Hospital",
  "PPP",
  "PP Inc VAT",
  "Formulary Reimbursement Classification",
  "Reimbursement Price",
  "Co-pay Price",
  "Source Update Date"
];


###############################################################
HTA data

Unlock the power of HTA Data for strategic market access 

Empower your market access strategy with detailed, accurate HTA data that drives success in pricing, reimbursement, and patient access 

 
1. Our comprehensive HTA data provides the insights you need to navigate reimbursement decisions and price negotiations effectively 

2. With HTA reports from 31 countries, you can compare criteria and outcomes to fine-tune your strategy, ensuring that your products align to payer expectations and maximize access potential 



Tailored reports  

Customize HTA data based on specific markets or therapeutic areas to get the most relevant insights for your needs 



Global HTA insights 

Gain access to key components of HTA decisions from major markets, including restrictions to reimbursement, economic & clinical benefit and market-specific outcomes 



Optimize market entry 

Utilize HTA insights to predict challenges, benchmark submissions, and maximize reimbursement opportunities 

 
const names = [
  "Country",
  "Brand Name",
  "INN",
  "MOA",
  "Pack Description",
  "Company",
  "Brand Category",
  "Therapy Class",
  "WHOATC",
  "Orphan Status",
  "Top Level Indication",
  "Regulatory Indication",
  "Indication HTA",
  "National HTA Body",
  "Assessment Publication Data",
  "Local Decision",
  "Standardized Decision",
  "Clinical Reason",
  "Economic Reason",
  "Comparator",
  "Utilisation Restrictions"
];









#########################
Dosing Data


Accurate dosing data for confident market access decisions 

Make informed decisions with reliable dosing data that ensures your products meet the requirements of healthcare providers and regulatory bodies 

 

1. Ensure that your market access strategies are backed by precise, up-to-date dosing information 

2. Our comprehensive dosing data covers a wide range of therapeutic areas, providing insights into standard dosing regimens, recommended starting doses, and adjustments based on specific patient populations 




Comprehensive coverage 

Access dosing data across multiple therapeutic areas, including dosage forms, strengths, and frequency 



Global insights  

Compare dosing standards and variations across markets and regions for more strategic decision-making. 



Updated regularly 

Our data is continuously updated to reflect the latest regulatory approvals 




const names = [
  "Country",
  "Brand Name",
  "INN",
  "MOA",
  "Pack Description",
  "Company",
  "Brand Category",
  "Therapy Class",
  "WHOATC",
  "Orphan Status",
  "Top Level Indication",
  "Regulatory Indication",
  "Loading Dosing",
  "Maintenance Dosing",
  "Loading Dosing Frequency",
  "Loading Dosing Frequency Unit",
  "Maintenance Dosing Frequency",
  "Maintenance Dosing Frequency Unit",
  "Loading Dosing Duration",
  "Loading Dosing Duration Unit",
  "Maintenance Dosing Duration",
  "Maintenance Dosing Duration Unit",
  "Body Surface Area",
  "Average Weight"
];






###################################################
Cost of Treatment data




Maximize market access with in-depth cost of treatment insights for strategic pricing 

Make informed decisions with accurate cost of treatment data to drive successful market access and optimize pricing strategies 

 

1. Our detailed cost of treatment data will provide the insights necessary to assess financial implications, optimize pricing models and enhance reimbursement negotiations 

2 .Leverage our cost of treatment data to make informed decisions that improve market access, enhance patient care, and support sustainable health care practices 



Customizable reports 

Create tailored reports that focus on specific treatment pathways, patient populations, or geographical areas to enhance the relevance of your insights 


Informed reimbursement negotiations 

Equip your team with the data needed to substantiate pricing proposals during negotiations with payers  

Global coverage  

Analyze treatment costs from multiple countries and regions, helping you tailor your market access strategy for specific health care systems 



const names = [
  "Country",
  "Brand Name",
  "INN",
  "MOA",
  "Pack Description",
  "Company",
  "Brand Category",
  "Therapy Class",
  "WHOATC",
  "Orphan Status",
  "Top Level Indication",
  "Regulatory Indication",
  "Currency",
  "Pack Price",
  "Per Day (including wastage)",
  "Per Month (including wastage)",
  "Per Annum (including wastage)",
  "Per Duration (including wastage)"
];






#####################################################################
Regulatory data


Navigate global markets with comprehensive regulatory approval data 

With our reliable, up-to-date regulatory approval data, 
you can ensure your pricing and market access strategies 
are relevant to the current treatment landscape 

1. Our regulatory approval data will provide you with 
the insights you need to build a strong foundation for 
pricing and market access strategies  

2. Anticipate and navigate competition to 
optimize strategy across markets 

 



Customizable reports 

Tailor your regulatory data report to focus on
the most relevant information for your strategy 



Boost market access 

Stay informed about the latest regulatory 
decisions to enhance your market access strategy 


Optimize pricing strategies 

Leverage regulatory approval data to align your
 pricing models with market landscape, ensuring all scenarios are covered 

const names = [
  "Country",
  "Brand Name",
  "INN",
  "MOA",
  "Pack Description",
  "Company",
  "Brand Category",
  "Therapy Class",
  "WHOATC",
  "Orphan Status",
  "Top Level Indication",
  "Regulatory Indication",
  "Line of Therapy",
  "Regulatory Agency",
  "Indication Approval Date"
];







###################### For the 3rd section



Financial Services Organizations 

Investment Banks (M&A), Health Care Investment Funds, Private Equity Firms, Venture Capital Firms, Insurance Companies, Financial Analyst & Research Firms 

1. Informed investment decisions 

  Access market access data to assess the financial viability of pharmaceutical investments and inform portfolio management 

2. Risk assessment

  Utilize pricing data to evaluate potential risks and returns associated with new drug developments and market entries 

 

Educational Institutions 

Universities & Colleges, Research Institutions, Professional Training & Certification Programs, Policy Research Organisations, Online Learning Platforms 

1. Research and curriculum development 
    Incorporate real-world pricing and market access data into research initiatives and educational programs to prepare the next generation of healthcare professionals 

2. Policy analysis 
    Leverage data for academic research on healthcare policy, pricing regulations, and market dynamics 




Clinical Research Organizations 

Full service CROs, Speciality CROs, Regulatory Affairs CROs, Health Economics and Outcomes Research CROs, Biostatistics & Data Analysis CROs, Consulting CROs 

1. Feasibility assessment:  
    Utilize pricing and market access data to optimize clinical trial design and patient recruitment efficiency 

2. Contextualize clinical trials:  
    Understand pricing and reimbursement landscape to ensure clinical evidence aligns with market needs and payer expectations 





Biotech Firms 

Clinical Stage Biotech Companies, Commercial Stage Biotech Companies, Emerging Biotech Startups, Specialty Biotech Firms, Orphan Drug Developers, Gene Therapy Companies, Biologics and Biosimilars Companies, Digital Health Biotech Firms  

1. Streamline commercialization 
    Access insights that help navigate the complexities of market access, enabling effective pricing strategies for new biotech innovations 

2. Competitive benchmarking 

Analyze competitor pricing and market positioning to identify opportunities for differentiation and growth 







 

 

Easy to use 
Build reports without any technical expertise 



Quick access 
Reports are available once payment has been received 

 



 

Fully customizable  
Tailor your report to get the answers you need 


 

Up-to-date data 

Current data to accurately inform your decision-making process 

Data you can trust 

All data is from credible sources and verified 


Extensive coverage 

63 countries, 5 datasets, 101 datapoints 

