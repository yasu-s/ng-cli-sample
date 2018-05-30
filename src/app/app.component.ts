import { Component } from '@angular/core';
import { AppService } from './app.service';

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
        this.sevice.getData().subscribe(data => {
            if (data) {
                alert(`LoginName: ${data.name}`);
            }
        });
    }

// #endregion

}
