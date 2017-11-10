import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LeaveComponent } from './leave.component';
import { LeaveRoutes } from './leave-routing';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(LeaveRoutes),
        FormsModule
    ],
    declarations: [
      LeaveComponent,        
    ]
})

export class LeaveModule {}


