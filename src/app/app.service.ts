import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

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

// #endregion

}
