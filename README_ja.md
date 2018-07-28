# 概要

Angular CLI の実行環境のサンプルです。 
Angular CLI の基本スクリプトの他に以下の起動スクリプトを追加しています。  
* Browsersync起動
* 単体テスト実行(CI用)
* TSLint実行(CI用)

# 動作環境  

* Node.js 8.x  
* Angular 6.x  

# 動作確認  

## 1. サンプルのダウンロード

```
git clone git@github.com:yasu-s/ng-cli-sample.git
```

## 2. パッケージインストール  

```
cd ng-cli-sample
npm install
```

## 3. サンプルの起動  

```
npm start
```

# NPM Script 一覧

<table>
<tr>
  <th>スクリプト</th>
  <th>概要</th>
</tr>
<tr>
  <td>build</td>
  <td>ソースコードをビルドします。</td>
</tr>
<tr>
  <td>start:bs</td>
  <td>
    Browsersync で起動します。<br>  
    ソースコードの変更を監視して、ビルドも実行します。
  </td>
</tr>
<tr>
  <td>test</td>
  <td>単体テストを実行します。</td>
</tr>
<tr>
  <td>test:headless</td>
  <td>
    単体テストを実行します。(CI用)<br>  
    JUnit形式のテスト結果ファイルを ./reports/test-results.xml に出力します。<br>  
    コードカバレッジについても ./reports/coverage ディレクトリに出力します。  
  </td>
</tr>
<tr>
  <td>lint</td>
  <td>TSLintを実行します。</td>
</tr>
<tr>
  <td>lint:output</td>
  <td>
    TSLintを実行します。(CI用)<br>   
    TSLintの結果を ./reports/tslint-result.json に出力します。
  </td>
</tr>
</table>
