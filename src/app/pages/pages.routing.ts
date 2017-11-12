
import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';
import { ModuleWithProviders } from '@angular/core';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

import { AuthGuard } from './../core/services/common/auth-guard.service';

export const PagesRoutes: Routes = [
    //theme comp path start
            {
              path: 'login',
              component: LoginComponent
            },
            {
              path: 'register',
              component: RegisterComponent
            },
       //theme comp path End
    {
      path: 'pages', component: PagesComponent,
      children: [
        { path: '', redirectTo: 'dashboard', pathMatch: 'full', canActivate: [AuthGuard] },
        { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule', canActivate: [AuthGuard] },
        { path: 'attendance', loadChildren: './attendance/attendance.module#AttendanceModule', canActivate: [AuthGuard] },
        { path: 'leave', loadChildren: './leave/leave.module#LeaveModule', canActivate: [AuthGuard] },
      ]
    },
  ];
  
export const routing: ModuleWithProviders = RouterModule.forChild(PagesRoutes);