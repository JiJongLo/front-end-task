import { Routes } from '@angular/router';

import { DashboardComponent } from './features/dashboard.component';
export const routes: Routes = [
  { path: '', component: DashboardComponent, pathMatch: 'full' }
];
