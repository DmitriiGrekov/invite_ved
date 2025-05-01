FROM node:18.5.0-alpine

COPY . /app
COPY package.json /app

WORKDIR /app

RUN npm i
RUN npm install -g serve

RUN npm run build
