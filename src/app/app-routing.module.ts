import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageerrorComponent } from './pageerror/pageerror.component';
import { AuthGuard } from './guards/auth.guard';


const routes: Routes = [
  // {path:'terms-conditions',component:TermsConditionsComponent},
  { path: '', loadChildren: () => import('./home/home.module').then(m => m.HomeModule),canActivate:[AuthGuard], data : { role : 'Customer'} },
  { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),canActivate:[AuthGuard], data : { role : 'Login'} },
  { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),canActivate:[AuthGuard], data : { role : 'Admin'} },
  { path: 'landingPages', loadChildren: () => import('./landing-pages/landing-pages.module').then(m => m.LandingPagesModule) },
  { path: 'ltsc', loadChildren: () => import('./ltsc/ltsc.module').then(m => m.LTSCModule) },
  
  {path:'**',component:PageerrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
