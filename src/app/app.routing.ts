import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { AuthLayoutComponent } from './theme/layouts/auth/auth-layout.component';

export const AppRoutes: Routes = [
  { path: '', redirectTo: 'pages', pathMatch: 'full' },

  //theme comp path start
  {
        path: 'components',
        loadChildren: './theme/components/components.module#ComponentsModule'
    },{
        path: 'forms',
        loadChildren: './theme/forms/forms.module#Forms'
    },{
        path: 'tables',
        loadChildren: './theme/tables/tables.module#TablesModule'
    },{
        path: 'maps',
        loadChildren: './theme/maps/maps.module#MapsModule'
    },{
        path: 'widgets',
        loadChildren: './theme/widgets/widgets.module#WidgetsModule'
    },{
        path: 'charts',
        loadChildren: './theme/charts/charts.module#ChartsModule'
    },{
        path: 'calendar',
        loadChildren: './theme/calendar/calendar.module#CalendarModule'
    },{
        path: '',
        loadChildren: './theme/userpage/user.module#UserModule'
    },{
        path: '',
        loadChildren: './theme/timeline/timeline.module#TimelineModule'
    },
    {
      path: '',
      component: AuthLayoutComponent,
      children: [{
        path: 'pages',
        loadChildren: './pages/pages.module#PagesModule'
      }]
    },
   //theme comp path End

  { path: '**', redirectTo: 'pages/404' },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(AppRoutes, { useHash: true });

