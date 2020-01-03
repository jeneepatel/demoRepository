import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FullComponent } from './layouts/full/full.component';
import { ModulesListComponent } from './modules-list/modules-list.component';
import { ModuleDetailsComponent } from './module-details/module-details.component';

export const Approutes: Routes = [
  { path: 'modulesList/:categoryName', component: ModulesListComponent },
  { path: 'moduleDetails/:moduleName', component: ModuleDetailsComponent },
  {
    path: '',
    component: FullComponent,
    children: [
      { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
      {
        path: 'dashboard',
        loadChildren: './dashboard/dashboard.module#DashboardModule'
      },
      {
        path: 'component',
        loadChildren: './component/component.module#ComponentsModule'
      },
      
    ]
  },
  {
    path: '**',
    redirectTo: '/dashboard'
  }
];
