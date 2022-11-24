# react.js

```js
██████  ███████  █████   ██████ ████████      ██ ███████ 
██   ██ ██      ██   ██ ██         ██         ██ ██      
██████  █████   ███████ ██         ██         ██ ███████ 
██   ██ ██      ██   ██ ██         ██    ██   ██      ██ 
██   ██ ███████ ██   ██  ██████    ██ ██  █████  ███████ 
```

## environment

[![React.js](https://img.shields.io/static/v1?label=&message=React.js&color=61DAFB&logo=React&logoColor=61DAFB&labelColor=2F333A)](https://es.reactjs.org/)<!-- React.js -->

- `node.js`
- `NPM 5.2+`
- `babel`
- `JSX syntax`
- `Firefox`

## instalation

- install [node.js](https://nodejs.org/en/)
- install [npm](https://www.npmjs.com/)

- `sudo snap install node --classic`

### Using docker

#### docker file

```Dockerfile
FROM node:18-alpine

RUN npm install --location=global vim
RUN npm install --location=global npm
RUN npm install --location=global semistandard -y

```

- `docker build -t node-alp:1.0 .`
- `docker run -d -it --rm -p 3000:3000 -v /home/ralex/code:/code --user node --name node-alp-0 node-alp:1.0`
- `docker exec -it --user root node-alp-0 sh`

### create React app

> This process will install react, react-dom and react-scripts

- `node -v`
- `npx create-react-app my-app`
- `cd my-app`
- `npm start`
- open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## fundations

*Principles* - React.js

- Don't touch the DOM
- Build websites like blocks
- Unidirection data flow, only move down
- React.js the UI

### src folder

- `package.json` what are the different packages or libraries that the project means in order to work, created by `create-react-app`

## scripts

`npm start` load into localhost:3000

`npm run build` build the project in an optimized way ready for production. React create an optimal build

`npm run eject` don't eject until you find a good reason for that (actually i don't know one)

## JSX

> JavaScript Expressions

- whenever use curly braces `{}` is a JavaScript expression and can be used functions

```JSX
let name = 'John'
{name.toLowerCase()}
```

> Author
<!-- twitter -->
[![Twitter](https://img.shields.io/twitter/follow/ralex_uy?style=social)](https://twitter.com/ralex_uy) <!-- linkedin --> [![Linkedin](https://img.shields.io/badge/LinkedIn-+28K-blue?style=social&logo=linkedin)](https://www.linkedin.com/in/ronald-rivero/) <!-- github --> [![Github](https://img.shields.io/github/followers/ralexrivero?style=social)](https://github.com/ralexrivero/) <!-- vagrant --> [![Vagrant](https://img.shields.io/static/v1?label=&message=Vagrant%20Profile&color=1868F2&logo=vagrant&labelColor=2F333A)](https://app.vagrantup.com/ralexrivero) <!-- docker --> [![Docker](https://img.shields.io/static/v1?label=&message=Docker%20Profile&color=2496ED&logo=Docker&labelColor=2F333A)](https://hub.docker.com/u/ralexrivero)
