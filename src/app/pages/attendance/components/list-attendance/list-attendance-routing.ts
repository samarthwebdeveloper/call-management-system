import { Routes, RouterModule } from '@angular/router';
import { ListAttendanceComponent } from './list-attendance.component';

// noinspection TypeScriptValidateTypes
const routes: Routes = [
  { path: '', component: ListAttendanceComponent },
];

export const routing = RouterModule.forChild(routes);
