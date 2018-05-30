import { Injectable } from '@angular/core';
import {
  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest
} from '@angular/common/http';

import { Observable } from 'rxjs';

/**
 *
 */
@Injectable()
export class CustomInterceptor implements HttpInterceptor {

    /**
     *
     * @param req
     * @param next
     */
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const newReq = req.clone({ withCredentials: true });
        return next.handle(newReq);
    }
}
