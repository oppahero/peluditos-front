import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { TokenService } from '../services';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  let tokenService = inject(TokenService);
  const accessToken = tokenService.getAccessToken();

  const authReq = accessToken
    ? req.clone({ setHeaders: { Authorization: `Bearer ${accessToken}` } })
    : req;

  return next(authReq);
};
