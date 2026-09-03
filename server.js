/**
 * ローカル確認用の静的配信サーバー
 *
 * public/ディレクトリ配下のファイルをそのまま配信する。
 * Node.jsの標準ライブラリのみを使用し、外部依存を持たない。
 * セキュリティのため127.0.0.1にのみバインドし、パストラバーサルを防止する。
 *
 * 起動方法: node server.js
 * 確認URL: http://127.0.0.1:3951/
 */

'use strict';

const http = require('http');
const fs = require('fs');
const path = require('path');

const HOST = '127.0.0.1';
const PORT = 3951;
const PUBLIC_DIR = path.join(__dirname, 'public');

/** 拡張子とContent-Typeの対応表 */
const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.ico': 'image/x-icon',
  '.txt': 'text/plain; charset=utf-8',
};

/**
 * リクエストされたURLパスを、public配下の安全なファイルパスへ解決する
 * @param {string} urlPath リクエストのパス部分
 * @returns {string|null} 解決済みの絶対パス。public外を指す場合はnull
 */
function resolveSafePath(urlPath) {
  // クエリ文字列を除去し、URLエンコードを復号する
  let pathname;
  try {
    pathname = decodeURIComponent(urlPath.split('?')[0]);
  } catch (_err) {
    return null;
  }

  // 末尾がディレクトリの場合はindex.htmlを補完する
  if (pathname.endsWith('/')) {
    pathname += 'index.html';
  }

  const resolved = path.normalize(path.join(PUBLIC_DIR, pathname));

  // パストラバーサル防止：public配下以外へのアクセスを拒否する
  if (!resolved.startsWith(PUBLIC_DIR + path.sep) && resolved !== PUBLIC_DIR) {
    return null;
  }
  return resolved;
}

const server = http.createServer((req, res) => {
  // GETとHEAD以外は受け付けない
  if (req.method !== 'GET' && req.method !== 'HEAD') {
    res.writeHead(405, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end('405 Method Not Allowed');
    return;
  }

  const filePath = resolveSafePath(req.url || '/');
  if (filePath === null) {
    res.writeHead(400, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end('400 Bad Request');
    return;
  }

  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
      res.end('404 Not Found');
      return;
    }
    const ext = path.extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';
    res.writeHead(200, {
      'Content-Type': contentType,
      'Cache-Control': 'no-store',
    });
    res.end(req.method === 'HEAD' ? undefined : data);
  });
});

server.listen(PORT, HOST, () => {
  console.log(`Learning Portal: http://${HOST}:${PORT}/ で配信中`);
});
