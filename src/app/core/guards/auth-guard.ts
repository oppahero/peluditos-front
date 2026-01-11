import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthUserStore, TokenService } from '../services';
import { of, switchMap } from 'rxjs';
import { AuthApi } from '@app/features/auth/login/services/auth-api';

export const authGuard: CanActivateFn = (route, state) => {
  const tokenservice = inject(TokenService);
  const authApi = inject(AuthApi);
  const router = inject(Router);

  if (tokenservice.isLoggedIn()) {
    return of(true);
  }
  return authApi.refreshToken().pipe(
    switchMap(() => {
      if (tokenservice.isLoggedIn()) {
        return of(true);
      } else {
        router.navigate(['/auth']);
        return of(false);
      }
    })
  );
};
