FROM node:22-alpine AS build-env
WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=build-env /usr/src/app/dist /usr/share/nginx/html
