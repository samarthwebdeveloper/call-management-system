import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { AttendanceComponent } from './attendance.component';

export const AttendanceRoutes: Routes = [
  {
    path: '', component: AttendanceComponent,
    children: [
       { path: 'manage', loadChildren: './components/manage/manage.module#ManageModule' },
    ],
  },
];

export const routing: ModuleWithProviders = RouterModule.forChild(AttendanceRoutes);
