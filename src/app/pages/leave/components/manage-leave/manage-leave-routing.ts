import { Routes, RouterModule } from '@angular/router';
import { ManageLeaveComponent } from './manage-leave.component';

// noinspection TypeScriptValidateTypes
const routes: Routes = [
  { path: '', component: ManageLeaveComponent },
];

export const routing = RouterModule.forChild(routes);
