import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { LeaveComponent } from './leave.component';

export const LeaveRoutes: Routes = [
  {
    path: '', component: LeaveComponent,
    children: [
       { path: 'manage', loadChildren: './components/manage-leave/manage-leave.module#ManageLeaveModule' },
    ],
  },
];

export const routing: ModuleWithProviders = RouterModule.forChild(LeaveRoutes);
