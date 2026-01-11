import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthUserStore } from '../services';

export const authGuard: CanActivateFn = (route, state) => {
  const userService = inject(AuthUserStore);
  const router = inject(Router);

  if (userService.getUser()) return true;
  else {
    router.navigate(['/auth']);
    return false;
  }
};
