import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DateAdapter } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SelectModule } from 'ng2-select';
import { MaterialModule } from '../../../../app.module';

import { routing } from './manage-leave-routing';
import { ManageLeaveComponent } from './manage-leave.component';

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
    ManageLeaveComponent,
  ],
  providers: [
    LeaveService
  ]
})
export class ManageLeaveModule {}


