# Learning Index

個人で開発・運用している学習Webサービスとプロダクトをまとめた、Tomoya Maitaのポートフォリオサイトです。

公開URL：[learning-index.pages.dev](https://learning-index.pages.dev)

## UI

90年代のパソコンをヒントに、青緑の壁紙、灰色の立体枠、濃紺のタイトルバー、ドット書体を全ページで共有しています。本文には読みやすい日本語書体を使用します。

- ホーム：自己紹介、代表作、学習教材、最近の公開。
- 学び：200 Stepsシリーズ7本、クラウド設計3本、セキュリティ教材1本。
- 作品：Sapor、Pixsmith、This is pen。
- プロフィール：教育・AI・エンジニアリングの軸と活動の紹介。
- ショートカットとスタートメニューからページを移動できます。
- ウィンドウを最小化した場合は、タスクバーやページ内リンクから復元できます。
- PCはデスクトップ全体を画面内に固定し、長い内容はウィンドウ本文だけをスクロールします。タイトルバーとタスクバーは固定です。
- PCでは最大化と解除に対応。Escapeキーでも最大化を解除できます。
- スマホでは縦並びに切り替え、最大化ボタンを非表示にします。
- マウス環境では通常・リンク・文字選択のカーソルを切り替えます。
- 時計は閲覧端末のローカル時刻です。通信や個人情報の保存は行いません。
- JavaScriptなしでも本文とページ間のリンクを利用できます。操作ボタンはJavaScriptの初期化後に表示します。

## 起動

依存パッケージは不要です。

```bash
node server.js
```

[http://127.0.0.1:3951/](http://127.0.0.1:3951/)で確認できます。サーバーはローカルのみにバインドします。

## 構成

- `public/index.html`：ホーム
- `public/learn.html`：学び
- `public/works.html`：作品
- `public/about.html`：プロフィール
- `public/styles.css`：全ページの共通スタイル
- `public/desktop.js`：共通ウィンドウ操作とスタートメニュー
- `public/cursors/`：白黒のカーソル3種
- `public/favicon.svg`：サイトアイコン
- `public/concepts/`：検討用の3案。noindex指定で本線と分離
- `docs/screenshots/`：PC・スマホの表示確認画像

Google FontsでDotGothic16とNoto Sans JPを読み込みます。読み込めない場合も代替書体で表示します。

## 検証

全4ページのPC・スマホ表示、ページ間リンク、スタートメニュー、最小化・復元、最大化・Escapeキー操作を確認しています。11教材と3作品の既存説明・リンクを照合しています。変更内容と詳細は`docs/ui-verification.md`を参照してください。

## デプロイ

Cloudflare Pagesへの直接アップロード方式です。ユーザーの公開許可を得てから実行します。

```bash
npx wrangler pages deploy public --project-name=learning-index
```

## デザイン検討の記録

`docs/design-ideal.md`と`docs/design-references.md`に好みと参考の記録があります。今回の全ページ更新は、比較用のA案を採用したものです。

## 掲載サービス一覧

すべて2026-09-03時点でHTTP 200（リダイレクトなし）を確認済み。

### 200 Stepsシリーズ（ブラウザ上で書いて実行して学ぶステップ教材）

| サービス             | URL                                    |
| -------------------- | -------------------------------------- |
| C++ 200 Steps        | https://cpp-200-steps.pages.dev        |
| Rust 200 Steps       | https://rust-200-steps.pages.dev       |
| Go 200 Steps         | https://go-200-steps.pages.dev         |
| PHP 200 Steps        | https://php-200-steps.pages.dev        |
| JavaScript 200 Steps | https://javascript-200-steps.pages.dev |
| Stimulus 200 Steps   | https://stimulus-200-steps.pages.dev   |
| Python 200 Steps     | https://python-200-steps.pages.dev     |

### アーキテクチャ学習

| サービス                     | URL                                                |
| ---------------------------- | -------------------------------------------------- |
| AWS Architecture Patterns    | https://aws-architecture-patterns.pages.dev        |
| Cloudflareアーキテクチャ入門 | https://cloudflare-architecture-patterns.pages.dev |
| GCP Architecture Patterns    | https://gcp-architecture-patterns.pages.dev        |

### セキュリティ

| サービス              | URL                                     |
| --------------------- | --------------------------------------- |
| Web Security Patterns | https://web-security-patterns.pages.dev |

### ブログ

| サービス            | URL                         |
| ------------------- | --------------------------- |
| maita tomoya dev io | https://mt-dev-io.pages.dev |
