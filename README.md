# IT-Learning-Quest (Docker 開発環境)

## 🏗 クイックスタート

### 1. 起動前の注意
ホスト（Mac）側で \`npm run dev\` が動いているとコンテナが起動しません。
必要に応じてポートを解放してください：
\`\`\`bash
kill -9 \$(lsof -t -i:3000)
\`\`\`

### 2. 環境の起動
\`\`\`bash
docker-compose up -d
\`\`\`
- 画面確認: [http://localhost:3000](http://localhost:3000)

### 3. リアルタイム表示（ホットリロード）の監視
編集が即座に反映されているかログで確認します。
\`\`\`bash
docker-compose logs -f app
\`\`\`

## 📊 データベース (Prisma)
- **マイグレーション**: 
  \`\`\`bash
  docker-compose exec app npx prisma migrate dev
  \`\`\`
- **管理画面 (Studio)**: 
  \`\`\`bash
  docker-compose exec app npx prisma studio
  \`\`\`
  → [http://localhost:5555](http://localhost:5555)

## 📁 同期の仕組み
- マウント設定により、Mac側の \`src/\` フォルダを書き換えると Docker 内の Next.js が自動で再ビルドを行います。