import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req).pipe(
    catchError((err: HttpErrorResponse) => {
      let errorMsg: string | object;

      // if (err.status === 401)
      // unauthorized

      // console.log('Error interceptor', err);
      // console.log('Error con error error', err.error.error);

      let responseError = err.status === 401 ? err.error.error : err.error;

      if (err.status === 0)
        errorMsg = {
          message: 'No se ha podido establecer conexión con el servidor.',
        };

      const errorInfo = {
        ...responseError,
        status: err.status,
        statusText: err.statusText,
      };

      return throwError(() => errorInfo);
    })
  );
};
