import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
// import { MdIconModule, MdCardModule, MdInputModule, MdCheckboxModule, MdButtonModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { FlexLayoutModule } from '@angular/flex-layout';

import { PagesComponent } from './pages.component';
import { PagesRoutes } from './pages.routing';

import { RegisterComponent } from './register/register.component';
import { PricingComponent } from '../theme/pricing/pricing.component';
import { LockComponent } from '../theme/lock/lock.component';
import { LoginComponent } from './login/login.component';

import { SidebarModule } from '../sidebar/sidebar.module';
import { NavbarModule} from '../shared/navbar/navbar.module';
import { FooterModule } from '../shared/footer/footer.module';
import { AuthService } from '../core/services/common/auth.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(PagesRoutes),
    FormsModule,
    ReactiveFormsModule,
    SidebarModule,
    NavbarModule,
    FooterModule
  ],
  declarations: [
    PagesComponent,
    LoginComponent,
    RegisterComponent,
    PricingComponent,
    LockComponent
  ]
})

export class PagesModule {}
