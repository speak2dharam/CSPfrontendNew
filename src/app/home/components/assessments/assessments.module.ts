import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AssessmentsRoutingModule } from './assessments-routing.module';
import { AssessmentsComponent } from './assessments.component';
import { BizappsComponent } from './components/bizapps/bizapps.component';
import { EnquiryModule } from '../enquiry/enquiry.module';
import { CybersecurityComponent } from './components/cybersecurity/cybersecurity.component';
import { InfraassessmentComponent } from './components/infraassessment/infraassessment.component';
import { ManagedservicesComponent } from './components/managedservices/managedservices.component';
import { ModernizationappComponent } from './components/modernizationapp/modernizationapp.component';
import { OpenaiComponent } from './components/openai/openai.component';
import { AzureVirtualDesktopComponent } from './components/azure-virtual-desktop/azure-virtual-desktop.component';
import { AzureOpenAIComponent } from './components/azure-open-ai/azure-open-ai.component';
import { ModernWorkplaceAssessmentComponent } from './components/modern-workplace-assessment/modern-workplace-assessment.component';
import { AutomatedLandingZoneComponent } from './components/automated-landing-zone/automated-landing-zone.component';
import { FiveRMigrationPlanningComponent } from './components/five-rmigration-planning/five-rmigration-planning.component';
import { SustainabilityAssessmentComponent } from './components/sustainability-assessment/sustainability-assessment.component';
import { GenerativeAiDataReadinessAssessmentComponent } from './components/generative-ai-data-readiness-assessment/generative-ai-data-readiness-assessment.component';
import { ResponsiveAiAssessmentComponent } from './components/responsive-ai-assessment/responsive-ai-assessment.component';


@NgModule({
  declarations: [
    AssessmentsComponent,
    BizappsComponent,
    CybersecurityComponent,
    InfraassessmentComponent,
    ManagedservicesComponent,
    ModernizationappComponent,
    OpenaiComponent,
    AzureVirtualDesktopComponent,
    AzureOpenAIComponent,
    ModernWorkplaceAssessmentComponent,
    AutomatedLandingZoneComponent,
    FiveRMigrationPlanningComponent,
    SustainabilityAssessmentComponent,
    GenerativeAiDataReadinessAssessmentComponent,
    ResponsiveAiAssessmentComponent
  ],
  imports: [
    CommonModule,
    AssessmentsRoutingModule,
    EnquiryModule
  ]
})
export class AssessmentsModule { }
