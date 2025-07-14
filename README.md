# contacts-frontend-react-hooks-redux


**contacts-frontend-react-hooks-redux** is part of "contacts" project that is an initiative where we try to explore frontend and backend implementations in order to better understand it cutting-edge features. This repository presents a react based frontend application.

## stack
* react
* react-hooks
* redux
* vite

## dependencies
* docker 25+
* nvm 0.39+

## get started (linux only)

### execute from source code

as a prerequisite, it is necessary to start the backend application

open another terminal and run the backend for this project
```
docker run -p 8010:8010 wastingnotime/contacts-backend-nodejs-express:latest 
```

set node version (v21+)
```
nvm use
```

install deps
```
npm i
```

start app
```
npm run dev
```

* just go to your browser on http://localhost:5173

## validating docker image locally

build
```
docker build --tag contacts-frontend-react-hooks-redux .
```

run
```
docker run -p 80:80 contacts-frontend-react-hooks-redux
```
* the test above do not work fully, it is just to show if the nginx server as responding accordly

## some tips

### upgrade node packages

verify outdated packages
```
npm outdated
```
install new version of outdated package
```
npm install <package>@latest
```
if npm is older use
```
nvm install-latest-npm
```