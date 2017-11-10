import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { AttendanceComponent } from './attendance.component';

export const AttendanceRoutes: Routes = [
  {
    path: '', component: AttendanceComponent,
    children: [
       { path: 'manage', loadChildren: './components/manage-attendance/manage-attendance.module#ManageAttendanceModule' },
       { path: 'lists', loadChildren: './components/list-attendance/list-attendance.module#ListAttendanceModule' },
       
    ],
  },
];

export const routing: ModuleWithProviders = RouterModule.forChild(AttendanceRoutes);
