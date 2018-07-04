import { Component } from '@angular/core';
import { AppService } from './app.service';
import { DataModel } from './app.model';
import { fizzBuzzOutput } from './ext/ext.test';

/**
 * サンプルコンポーネント
 */
@Component({
    selector:    'app-root',
    templateUrl: './app.component.html',
    styleUrls:   ['./app.component.css']
})
export class AppComponent {

// #region fields

    /** タイトル */
    title = 'app';

    /** データ */
    data: DataModel;

// #endregion

// #region constructor

    /**
     * コンストラクタ
     * @param sevice AppService
     */
    constructor(private sevice: AppService) { }

// #endregion

// #region methods

    /**
     * クリックイベント
     */
    onClick(): void {
        fizzBuzzOutput(20);

        this.sevice.getData().subscribe(data => {
            if (data) {
                this.data = data;
                alert(`LoginName: ${data.name}`);
            }
        }, err => {
            console.log(err);
        });
    }

// #endregion

}
