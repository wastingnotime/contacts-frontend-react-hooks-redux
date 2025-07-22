# syntax=docker/dockerfile:1
FROM node:22-alpine AS build-stage

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

FROM nginx:1.29.0-alpine

# act as doc only
EXPOSE 80
LABEL vendor=wastingnotime.org

COPY --from=build-stage /usr/src/app/dist /usr/share/nginx/html
