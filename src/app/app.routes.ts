import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./landing/landing').then((m) => m.Landing),
  },
  {
    path: 'auth',
    loadComponent: () => import('./auth/login/login').then((m) => m.Login),
  },
];
