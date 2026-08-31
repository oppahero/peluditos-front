import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req).pipe(
    catchError((err: HttpErrorResponse) => {
      let errorMsg: string | object;

      // if (err.status === 401)
      // unauthorized

      // let responseError = err.status === 401 ? err.error.error : err.error;
      let responseError: any;

      if (err.status === 401) {
        responseError = err.error?.error;
      } else if (err.status === 400) {
        // Si la estructura del backend incluye el array 'errors' dentro de 'error'
        const backendErrors = err.error?.error?.errors;

        if (Array.isArray(backendErrors)) {
          responseError = { message: backendErrors.join('. ') };
        } else {
          responseError = err.error;
        }
      } else {
        responseError = err.error;
      }

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
    }),
  );
};
