# Multiple Counter
複数のカウンターを作成し、合計値を算出することができるWebアプリです。

url: https://develop.d33n71zjml4ozu.amplifyapp.com/

![](./static/demo.gif)

# 要件
- カウントの増減やリセット機能
- カウンターの追加及び削除機能
- 各カウンターのタイトル設定機能
- 複数のカウンターの合計値表示機能

# 困難だった課題
Webアプリ作成後のAWS Amplifyへのデプロイで手間取った。
具体的には下記のエラーで時間を要した。
- svelteKitが自動的にインストールするアダプターがAmplifyは対応していなかった。 [#20](https://github.com/motsu8/multiple-counter/issues/20)
- Amplifyのnode.jsのバージョンがデフォルトだと、古いバージョンで使用しているバージョンに変えなければいけなかった。[#21](https://github.com/motsu8/multiple-counter/issues/21)
- ビルド後のhtml名をindex.htmlにする必要があった。[#22](https://github.com/motsu8/multiple-counter/issues/22)
- バンドルしたファイルのアウトプットディレクトリ名の変更が必要だった。→ Amplify.ymlで変更