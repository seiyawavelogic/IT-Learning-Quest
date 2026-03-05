FROM node:20-alpine

# 手順: Prismaが動作するために必要なOpenSSLをインストール
RUN apk add --no-cache openssl

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

# ここでエラーが出ていたので、OSの準備ができてから実行
RUN npx prisma generate

EXPOSE 3000

CMD ["npm", "run", "dev"]