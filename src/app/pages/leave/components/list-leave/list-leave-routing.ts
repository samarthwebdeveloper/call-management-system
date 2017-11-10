import { Routes, RouterModule } from '@angular/router';
import { ListLeaveComponent } from './list-leave.component';

// noinspection TypeScriptValidateTypes
const routes: Routes = [
  { path: '', component: ListLeaveComponent },
];

export const routing = RouterModule.forChild(routes);
