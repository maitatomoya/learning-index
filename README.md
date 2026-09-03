# Learning Index

個人で開発・運用している学習Webサービス群の統一ポータルサイトです。
別々のURLに散らばっているサービスを「作って、動かして、学ぶ」シリーズとして1ページにまとめ、
転職活動時のポートフォリオ導線も兼ねます。

公開URL：https://learning-index.pages.dev

## デプロイ

Cloudflare Pagesへの直接アップロード方式（Node.js 22以上が必要）。

```bash
npx wrangler pages deploy public --project-name=learning-index
```

## 特徴

- 依存パッケージゼロ（HTML+CSSのみ、JavaScriptなしで成立）
- 雑誌の目次を模した編集デザイン（章番号・リーダー罫・明朝体の見出し）
- レスポンシブ対応（モバイル1カラム）
- ダークモード対応（prefers-color-scheme）
- 本文テキストはコントラスト比AA以上を確保

## 起動方法

ローカル確認用の静的配信サーバーを同梱しています（Node.js標準ライブラリのみ使用）。

```bash
node server.js
# → http://127.0.0.1:3951/ で確認
```

サーバーは127.0.0.1にのみバインドされ、外部からはアクセスできません。

## ディレクトリ構成

```
learning-portal/
├── server.js          # ローカル確認用の静的配信サーバー（ポート3951）
├── public/
│   ├── index.html     # ポータル本体
│   └── styles.css     # スタイル
└── README.md
```

## 掲載サービス一覧

すべて2026-09-03時点でHTTP 200（リダイレクトなし）を確認済み。

### 200 Stepsシリーズ（ブラウザ上で書いて実行して学ぶステップ教材）

| サービス | URL |
| --- | --- |
| C++ 200 Steps | https://cpp-200-steps.pages.dev |
| Rust 200 Steps | https://rust-200-steps.pages.dev |
| Go 200 Steps | https://go-200-steps.pages.dev |
| PHP 200 Steps | https://php-200-steps.pages.dev |
| JavaScript 200 Steps | https://javascript-200-steps.pages.dev |
| Stimulus 200 Steps | https://stimulus-200-steps.pages.dev |
| Python 200 Steps | https://python-200-steps.pages.dev |

### アーキテクチャ学習

| サービス | URL |
| --- | --- |
| AWS Architecture Patterns | https://aws-architecture-patterns.pages.dev |
| Cloudflareアーキテクチャ入門 | https://cloudflare-architecture-patterns.pages.dev |
| GCP Architecture Patterns | https://gcp-architecture-patterns.pages.dev |

### セキュリティ

| サービス | URL |
| --- | --- |
| Web Security Patterns | https://web-security-patterns.pages.dev |

### ブログ

| サービス | URL |
| --- | --- |
| maita tomoya dev io | https://mt-dev-io.pages.dev |
