import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpErrorResponse, HTTP_INTERCEPTORS } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  intercept(
    req: import('@angular/common/http').HttpRequest<any>,
    next: import('@angular/common/http').HttpHandler
  ): import('rxjs').Observable<import('@angular/common/http').HttpEvent<any>> {
    return next.handle(req).pipe(  // Access the pipline to catch the errors
        catchError(error => {      // Depending on the type of error, do something
            if (error.status === 401) { // Error 401: Unauthorized
                return throwError(error.statusText);
            }
            if (error instanceof HttpErrorResponse) {
                // Get the "Application-Errror" from the header that the server returns
                const applicationError = error.headers.get('Application-Error');
                if (applicationError) {
                    return throwError(applicationError);
                }
                // Check for modal state errors (validation errors: not an email, password too short...)
                const serverError = error.error;
                let modalStateErrors = '';
                if (serverError.errors && typeof serverError.errors === 'object') {
                    // Loop through all validation errors
                    for (const key in serverError.errors) {
                        if (serverError.errors[key]) {
                            modalStateErrors += serverError.errors[key] + '\n';
                        }
                    }
                }
                return throwError(modalStateErrors || serverError || 'Unknown Server Error');
            }
        })
    );
  }
}

// Export a const to add it to our providers array
export const ErrorInterceptorProvider = {
    provide: HTTP_INTERCEPTORS,
    useClass: ErrorInterceptor,
    multi: true
};
