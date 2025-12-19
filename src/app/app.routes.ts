import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./features/landing/landing').then((m) => m.Landing),
  },
  {
    path: 'auth',
    loadComponent: () => import('./features/auth/login/components/login').then((m) => m.Login),
  },
  {
    path: 'dashboard',
    loadComponent: () => import('./layout/layout').then((m) => m.Layout),
  },
];
