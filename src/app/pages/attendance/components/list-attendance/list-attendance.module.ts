import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { routing } from './list-attendance-routing';
import { ListAttendanceComponent } from './list-attendance.component';

import { AttendanceService } from '../../../../core/services/attendance/attendance.service';

import { MaterialModule } from '../../../../app.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    routing,
    MaterialModule
  ],
  declarations: [
    ListAttendanceComponent,
  ],
  providers: [
    AttendanceService
  ]
})
export class ListAttendanceModule {}


