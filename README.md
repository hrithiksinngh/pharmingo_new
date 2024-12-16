# Pharmingo Frontend Application

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.0.3 and is used as frontend application for Pharmingo Report Generation, styled with Tailwind CSS. It provides a seamless user experience for interacting with the backend services, including report generation, user authentication, and purchase history management.

---

## Table of Contents

1. [Overview](#overview)
2. [Features](#features)
3. [Installation](#installation)
   - [Prerequisites](#prerequisites)
   - [Steps](#steps)
4. [Dependencies](#dependencies)
5. [Project Structure](#project-structure)
   - [Components](#components)
6. [Routing](#routing)
7. [Styling](#styling)
8. [Usage](#usage)
9. [Build and Deployment](#build-and-deployment)

---

## Overview

This Angular-based application acts as the frontend for Pharmingo's reporting platform. It includes features like secure user authentication, report exploration, and file downloads. The application  uses Tailwind CSS for consistent styling , Supabase for Authentication , Resend Emails for sending email to users and stripe for accepting payments.

---

## Features

- **Authentication**: Secure login and signup with OTP verification.
- **Dashboard**: View purchase history and access reports.
- **Report Generation**: Multi-step process to generate customized reports.
- **Checkout**: Integrated payment flow.
- **Responsive Design**: Tailored for both desktop and mobile users.
- **Theming**: Styled with Tailwind CSS for quick and consistent UI development.

---

## Installation

### Prerequisites

1. Node.js (v18+ recommended) (project uses v18.19.0)
2. npm or yarn (Recommend npm for installing packages)
3. Angular CLI (`npm install -g @angular/cli`) (project uses v18.2.10 )

### Steps

1. Clone the repository:

   ```bash
   https://globalpulse@dev.azure.com/globalpulse/Pulse/_git/clmfe

   ```

2. Navigate to the project directory:

   ```bash
   cd clmfe
   
   ```

3. Install dependencies:

   ```bash
   npm install
   
   ```


3. Make sure you ae using angular cli v18+ for this project and also the project uses 
   two variables `${devApiUrl}` which is `http//:localhost:3000` fro local development
   and `${serverApiUrl}` for prodcution.

4. Start the application:

   ```bash
    ng serve
   
   ```

5. Navigate to `http://localhost:4200/`. 
    The application will automatically reload if you change any of the source files.

6. Run `ng build` to build the project. 
    The build artifacts will be stored in the `dist/pharmingo` directory.

7. to build applciation for developent use `npm run build-dev` for development
   and `npm run build-prod` for production



## Dependencies

### Core Libraries

| Library           | Version   | Description                                   |
|-------------------|-----------|-----------------------------------------------|
| `@angular/core`   | ^18.0.0   | Angular framework core.                       |
| `@angular/router` | ^18.0.0   | Provides routing and navigation support.      |
| `rxjs`            | ~7.8.0    | Reactive programming library.                 |
| `zone.js`         | ~0.14.3   | Execution context management for Angular.     |

### Styling & UI

| Library           | Version   | Description                                   |
|-------------------|-----------|-----------------------------------------------|
| `tailwindcss`     | ^3.3.2    | Utility-first CSS framework.                  |
| `bootstrap`       | ^5.3.3    | Frontend framework for responsive design.     |
| `font-awesome`    | ^4.7.0    | Icons and font library.                       |
| `lucide-angular`  | ^0.454.0  | Icon library for modern UI.                   |

### Utilities

| Library           | Version   | Description                                   |
|-------------------|-----------|-----------------------------------------------|
| `ngx-toastr`      | ^19.0.0   | Notifications and toast messages.             |
| `swiper`          | ^11.1.15  | Swiper.js for carousels and sliders.          |
| `file-saver`      | ^2.0.5    | For saving files client-side.                 |



## Routing

The application uses Angular's lazy-loading feature for efficient module loading. Below are the key routes:

| Path                              | Component                   | Description                                |
|-----------------------------------|-----------------------------|--------------------------------------------|
| `/`                               | LandingPageComponent        | Home page of the application.             |
| `/login`                          | LoginComponent              | Login page.                               |
| `/signup`                         | SignupComponent             | Signup page.                              |
| `/dashboard`                      | DashboardComponent          | User dashboard.                           |
| `/purchase-history`               | PurchaseHistoryComponent    | View past purchases.                      |
| `/verify-login-otp`               | VerifyLoginOtpComponent     | OTP verification for login.               |
| `/verify-signup-otp`              | VerifySignupOtpComponent    | OTP verification for signup.              |
| `/checkout`                       | CheckoutPageComponent       | Checkout process.                         |
| `/success`                        | SuccessPageComponent        | Success page after completing actions.    |
| `/failure`                        | FailurePageComponent        | Error or failure messages.                |
| `/generate-report/step/:step`     | GenerateReportComponent     | Multi-step report generation.             |
| `/download-report`                | DownloadExploreComponent    | Explore and download reports.             |
| `/privacy-policy`                 | PrivacyPolicyComponent      | Privacy policy information.               |
| `/terms-and-conditions`           | TermsAndConditionsComponent | Terms and conditions.                     |
| `/about-us`                       | AboutUsComponent            | Information about the platform.           |
| `**`                              | Redirect to `/`             | Default fallback route.                   |

