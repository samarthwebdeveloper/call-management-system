import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DateAdapter } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SelectModule } from 'ng2-select';
import { MaterialModule } from '../../../../app.module';

import { routing } from './list-leave-routing';
import { ListLeaveComponent } from './list-leave.component';

import { LeaveService  }  from '../../../../core/services/leave/leave.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    routing,
    MaterialModule
  ],
  declarations: [
    ListLeaveComponent,
  ],
  providers: [
    LeaveService
  ]
})
export class ListLeaveModule {}


