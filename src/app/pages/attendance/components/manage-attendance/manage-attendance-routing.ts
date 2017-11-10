import { Routes, RouterModule } from '@angular/router';
import { ManageAttendanceComponent } from './manage-attendance.component';

// noinspection TypeScriptValidateTypes
const routes: Routes = [
  { path: '', component: ManageAttendanceComponent },
];

export const routing = RouterModule.forChild(routes);
