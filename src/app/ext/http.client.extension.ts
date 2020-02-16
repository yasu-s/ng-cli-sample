import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

declare module '@angular/common/http/http' {

    interface HttpClient {
        /**
         * POST拡張：戻り値がHTTPステータスコード
         * @param url  URL
         * @param body データ
         */
        postEx(url: string, body: any): Observable<number>;
    }
}

HttpClient.prototype.postEx = function(url: string, body: any) {
    const client = this as HttpClient;
    return client.post(url, body, { observe: 'response' }).pipe(
        map((res: HttpResponse<any>) => {
            return res.status;
        }),
        catchError((err: HttpErrorResponse) => {
            return of(err.status);
        })
    );
};
