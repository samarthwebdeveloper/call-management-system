
import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';
import { ModuleWithProviders } from '@angular/core';

import { RegisterComponent } from './register/register.component';
import { PricingComponent } from '../theme/pricing/pricing.component';
import { LockComponent } from '../theme/lock/lock.component';
import { LoginComponent } from './login/login.component';

import { AuthGuard } from './../core/services/common/auth-guard.service';

export const PagesRoutes: Routes = [
    //theme comp path start
            {
              path: 'login',
              component: LoginComponent
            },
            {
              path: 'lock',
              component: LockComponent
          },{
              path: 'register',
              component: RegisterComponent
          },{
              path: 'pricing',
              component: PricingComponent
          },
       //theme comp path End
    {
      path: 'pages', component: PagesComponent,
      children: [
        { path: '', redirectTo: 'dashboard', pathMatch: 'full', canActivate: [AuthGuard] },
        { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule', canActivate: [AuthGuard] },
      ]
    },
  ];
  
export const routing: ModuleWithProviders = RouterModule.forChild(PagesRoutes);