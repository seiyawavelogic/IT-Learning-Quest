# IT-Learning-Quest (Next.js + Prisma + Docker)

このプロジェクトは、Dockerコンテナを利用したフルスタック開発環境です。
Macローカルのプロセス競合を回避し、常にクリーンな状態で開発を開始できるように設計されています。

---

## 🚀 クイックスタート (開発開始の手順)

### 1. ポート解放とコンテナ起動
Mac側で3000番ポートが使われている場合を考慮し、掃除してから起動します。
```bash
# 既存のポート3000プロセスを終了（エラーは無視してOK）
kill -9 $(lsof -t -i:3000) 2>/dev/null || true

# ビルドしてバックグラウンドで起動
docker-compose up -d --build



App: http://localhost:3000 (ホットリロード対応)

2. データベースのセットアップ
コンテナが起動したら、Prismaを使用してDBテーブルを作成・同期します。

Bash

# DBマイグレーションと型生成
docker-compose exec app npx prisma migrate dev --name init
🛠 運用・管理コマンド
📊 データベースをブラウザで操作 (Prisma Studio)
SQLを書かずにデータを直接確認・編集できます。

Bash

docker-compose exec app npx prisma studio
Studio: http://localhost:5555

📝 ログの確認 (ホットリロードの監視)
コードを変更して保存した際、正しくコンパイルされたか確認できます。

Bash

docker-compose logs -f app
🧹 環境の完全クリーンアップ
動作がおかしい、または一度全てリセットしたい場合。

Bash

docker-compose down --rmi all --volumes --remove-orphans
📁 主要なディレクトリと役割
src/app/: Next.js App Router (ページ、レイアウト)

prisma/schema.prisma: データベースの設計図（テーブル定義）

src/lib/prisma.ts: Prisma Client のインスタンス（DB接続用）

Dockerfile: OpenSSL導入済みの実行環境設定


--

## 3. 次に提示すべきファイルパス (整合性確認用)

READMEが整い、マイグレーションも成功したので、次は**「本物のデータ」**を扱いましょう。
以下のファイルを Cursor で開いて中身を教えてください。

* **`prisma/schema.prisma`** (現在定義されているモデルを確認)
* **`src/app/page.tsx`** (DBからデータを取得する処理へ書き換え)

