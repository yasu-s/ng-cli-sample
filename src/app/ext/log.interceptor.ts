import { Injectable } from '@angular/core';
import {
  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse
} from '@angular/common/http';

import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

/**
 *
 */
@Injectable()
export class LogInterceptor implements HttpInterceptor {

    /**
     *
     * @param req
     * @param next
     */
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req).pipe(
            tap(event => {
                if (event instanceof HttpResponse) {
                    console.log(`url: ${req.url}, method: ${req.method}, status: ${(<HttpResponse<any>>event).status}`);
                }
            })
        );
    }
}
