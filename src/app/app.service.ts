import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

import { DataModel } from './app.model';

/**
 * サービスクラス
 */
@Injectable({
    providedIn: 'root',
})
export class AppService {

// #region fields

    /** 接続先URL */
    readonly URL = './assets/data.json';

// #endregion

// #region constructor

    /**
     * コンストラクタ
     * @param http HttpClient
     */
    constructor(private http: HttpClient) { }

// #endregion

// #region methods

    /**
     * データ取得
     * @returns データモデル
     */
    getData(): Observable<DataModel> {
        return this.http.get<DataModel>(this.URL);
    }

    getData2(): Observable<string[]> {
        return of(['1', '2']).pipe(
            delay(100)
        );
    }

// #endregion

}
