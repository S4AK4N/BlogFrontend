FROM node:20

WORKDIR /app

# 依存解決のため先に package*.json のみコピー
COPY ./package*.json ./

RUN npm install

# アプリ本体をコピー
COPY . .

EXPOSE 5173

CMD ["npm", "run", "dev"]