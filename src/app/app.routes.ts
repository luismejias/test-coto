import { Routes } from '@angular/router';
export const appRoutes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./pages/home/home.component').then((c)=> c.HomeComponent),
    title: 'Home page',
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'home',
  },
];
