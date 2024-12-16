import { Routes } from '@angular/router';

export const routes: Routes = [
    {path:'',loadComponent:()=>import('./landing-page/landing-page.component').then(m=>m.LandingPageComponent)},
    {path:'login',loadComponent:()=>import('./login/login.component').then(m=>m.LoginComponent)},
    {path:'signup',loadComponent:()=>import('./signup/signup.component').then(m=>m.SignupComponent)},
    {path:'dashboard',loadComponent:()=>import('./empty-state-dashboard/empty-state-dashboard.component').then(m=>m.EmptyStateDashboardComponent)},
    {path:'purchase-history',loadComponent:()=>import('./dashboard/dashboard.component').then(m=>m.DashboardComponent)},
    {path:'verify-login-otp',loadComponent:()=>import('./verify-login-otp/verify-login-otp.component').then(m=>m.VerifyLoginOtpComponent)},
    {path:'verify-signup-otp',loadComponent:()=>import('./verify-signup-otp/verify-signup-otp.component').then(m=>m.VerifySignupOtpComponent)},
    {path:'failure',loadComponent:()=>import('./failure-page/failure-page.component').then(m=>m.FailurePageComponent)},
    {path:'email-verified',loadComponent:()=>import('./email-verified/email-verified.component').then(m=>m.EmailVerifiedComponent)},
    {path:'pricing-page',loadComponent:()=>import('./pricing-page/pricing-page.component').then(m=>m.PricingPageComponent)},
    {path:'select-topic',loadComponent:()=>import('./select-topic/select-topic.component').then(m=>m.SelectTopicComponent)},
    {path:'generate-report/step/:step',loadComponent:()=>import('./generate-report/generate-report.component').then(m=>m.GenerateReportComponent)},
    {path:'download-report',loadComponent:()=>import('./download-exlpore/download-exlpore.component').then(m=>m.DownloadExlporeComponent)},
    {path:'selected-package',loadComponent:()=>import('./slected-package/slected-package.component').then(m=>m.SlectedPackageComponent)},
    {path:'reset-password',loadComponent:()=>import('./reset-password/reset-password.component').then(m=>m.ResetPasswordComponent)},
    {path:'privacy-policy',loadComponent:()=>import('./privacy-policy/privacy-policy.component').then(m=>m.PrivacyPolicyComponent)},
    {path:'terms-and-conditions',loadComponent:()=>import('./terms-and-conditions/terms-and-conditions.component').then(m=>m.TermsAndConditionsComponent)},
    {path:'about-us',loadComponent:()=>import('./about-us/about-us.component').then(m=>m.AboutUsComponent)},
    {path:'**', redirectTo:"" ,loadComponent:()=>import('./landing-page/landing-page.component').then(m=>m.LandingPageComponent)},
];
