# 翻訳拡張機能のCORSエラー回避（Cloudflare Workers）

## 背景

`https://translate-service.scratch.mit.edu/translate` が `Access-Control-Allow-Origin: https://scratch.mit.edu` のみを許可するようになり、`https://stretch3.champierre.com` からのリクエストがCORSエラーになった。

サーバーを持たなくても無料で同様のプロキシを立てられる方法。

## 前提

- Cloudflare アカウントが必要
- 無料枠: 10万リクエスト/日

## セットアップ手順

1. [dash.cloudflare.com](https://dash.cloudflare.com) にログイン
2. 左メニューの **Workers & Pages** → **Create** をクリック
3. **Hello World** テンプレートを選択（Continue with GitHub は不要）
4. Worker 名を入力（例: `scratch-translate-proxy`）→ **Deploy**
5. **Edit code** をクリックし、エディタの内容を以下に置き換える

```js
export default {
  async fetch(request) {
    if (request.method === 'OPTIONS') {
      return new Response(null, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, OPTIONS',
          'Access-Control-Max-Age': '86400',
        }
      });
    }

    const url = new URL(request.url);
    const targetUrl = 'https://translate-service.scratch.mit.edu' + url.pathname + url.search;

    const response = await fetch(targetUrl, {
      headers: { 'Host': 'translate-service.scratch.mit.edu' }
    });

    const newResponse = new Response(response.body, response);
    newResponse.headers.set('Access-Control-Allow-Origin', '*');
    return newResponse;
  }
}
```

6. **Save and Deploy** をクリック

## デプロイ後

Worker の URL（例: `https://scratch-translate-proxy.yourname.workers.dev`）が発行される。

## 独自ドメインの設定

1. [dash.cloudflare.com](https://dash.cloudflare.com) にログイン
2. **Workers & Pages** → 対象の Worker を選択
3. **Settings** タブ → **Domains & Routes** → **Add** → **Custom Domain**
4. `scratch-translate-proxy.junya-119.workers.dev` を入力 → **Add Custom Domain**

Cloudflare が自動で DNS レコードを追加し、SSL 証明書も発行する。数分で有効になる。

## deploy.yml の更新

`.github/workflows/deploy.yml` の sed コマンドで置換先を Worker の URL に変更する。

```yaml
- run: grep -rl "translate-service.scratch.mit.edu" ./build | xargs --no-run-if-empty sed -i 's|translate-service\.scratch\.mit\.edu|scratch-translate-proxy.junya-119.workers.dev|g'
```

## 動作確認

```
curl "https://scratch-translate-proxy.junya-119.workers.dev/translate?language=en&text=こんにちは"
# → {"result":"Hello"}
```
