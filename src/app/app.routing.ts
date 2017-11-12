import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

// import { AuthLayoutComponent } from './theme/layouts/auth/auth-layout.component';
import { PagesComponent } from './pages/pages.component';

export const AppRoutes: Routes = [
  { path: '', redirectTo: 'pages', pathMatch: 'full' },

  //theme comp path start
    {
      path: '',
      component: PagesComponent,
      children: [{
        path: 'pages',
        loadChildren: './pages/pages.module#PagesModule'
      }]
    },
   //theme comp path End

  { path: '**', redirectTo: 'pages/404' },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(AppRoutes, { useHash: true });

