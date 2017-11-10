import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { routing } from './manage-leave-routing';
import { ManageLeaveComponent } from './manage-leave.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    routing,
  ],
  declarations: [
    ManageLeaveComponent,
  ],
  providers: [
  ]
})
export class ManageLeaveModule {}


