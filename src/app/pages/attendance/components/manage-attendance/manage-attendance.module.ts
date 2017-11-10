import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { routing } from './manage-attendance-routing';
import { ManageAttendanceComponent } from './manage-attendance.component';

import { AttendanceService } from '../../../../core/services/attendance/attendance.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    routing,
  ],
  declarations: [
    ManageAttendanceComponent,
  ],
  providers: [
    AttendanceService
  ]
})
export class ManageAttendanceModule {}

