# 開発環境用
FROM node:20-alpine AS development

WORKDIR /app

COPY package*.json ./
# skip post install(package json)
RUN npm ci --ignore-scripts

COPY . .
RUN npx prisma generate

EXPOSE 3000
CMD ["npm", "run", "dev"]

# =============================================================
# 本番用（next.config.ts の output: 'standalone' を有効化して使う）
# =============================================================
# FROM node:20-alpine AS builder
# WORKDIR /app
# COPY package*.json ./
# RUN npm ci
# COPY . .
# RUN npx prisma generate && npm run build
#
# FROM node:20-alpine AS production
# ENV NODE_ENV=production
# WORKDIR /app
# COPY --from=builder /app/public ./public
# COPY --from=builder /app/.next/standalone ./
# COPY --from=builder /app/.next/static ./.next/static
# EXPOSE 3000
# CMD ["node", "server.js"]