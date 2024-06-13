import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssessmentsComponent } from './assessments.component';
import { BizappsComponent } from './components/bizapps/bizapps.component';
import { OpenaiComponent } from './components/openai/openai.component';
import { CybersecurityComponent } from './components/cybersecurity/cybersecurity.component';
import { ManagedservicesComponent } from './components/managedservices/managedservices.component';
import { InfraassessmentComponent } from './components/infraassessment/infraassessment.component';
import { ModernizationappComponent } from './components/modernizationapp/modernizationapp.component';
import { AzureVirtualDesktopComponent } from './components/azure-virtual-desktop/azure-virtual-desktop.component';
import { AzureOpenAIComponent } from './components/azure-open-ai/azure-open-ai.component';
import { ModernWorkplaceAssessmentComponent } from './components/modern-workplace-assessment/modern-workplace-assessment.component';
import { AutomatedLandingZoneComponent } from './components/automated-landing-zone/automated-landing-zone.component';
import { SustainabilityAssessmentComponent } from './components/sustainability-assessment/sustainability-assessment.component';
import { FiveRMigrationPlanningComponent } from './components/five-rmigration-planning/five-rmigration-planning.component';
import { GenerativeAiDataReadinessAssessmentComponent } from './components/generative-ai-data-readiness-assessment/generative-ai-data-readiness-assessment.component';
import { ResponsiveAiAssessmentComponent } from './components/responsive-ai-assessment/responsive-ai-assessment.component';

const routes: Routes = [
  { path: '', component: AssessmentsComponent },
  { path: 'biz-apps',component:BizappsComponent},
  { path: 'open-ai', component: OpenaiComponent },
  { path: 'cyber-security', component: CybersecurityComponent },
  { path: 'managed-services', component: ManagedservicesComponent },
  { path: 'infra-assessments', component: InfraassessmentComponent },
  { path: 'modernization-app-dba', component: ModernizationappComponent },
  { path: 'azure-virtual-dektop', component: AzureVirtualDesktopComponent },
  { path: 'azure-open-ai', component: AzureOpenAIComponent },
  { path: 'modern-workplace-assessment', component: ModernWorkplaceAssessmentComponent },
  { path: 'automated-landing-zone', component: AutomatedLandingZoneComponent },
  { path: 'sustainability-assessment', component: SustainabilityAssessmentComponent },
  { path: 'migration-6r-wave-planning', component: FiveRMigrationPlanningComponent },
  { path: 'generative-ai-data-readiness-assessment', component: GenerativeAiDataReadinessAssessmentComponent },
  { path: 'responsible-ai-assessment-services', component: ResponsiveAiAssessmentComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AssessmentsRoutingModule { }
