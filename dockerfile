FROM node:21.1-alpine as build-env
WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=build-env /usr/src/app/build /usr/share/nginx/html
