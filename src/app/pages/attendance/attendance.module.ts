import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AttendanceComponent } from './attendance.component';
import { AttendanceRoutes } from './attendance-routing';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(AttendanceRoutes),
        FormsModule
    ],
    declarations: [
      AttendanceComponent,        
    ]
})

export class AttendanceModule {}

