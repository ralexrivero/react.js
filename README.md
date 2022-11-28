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
- `react router`
- `Firefox`

## resources

- [React.js](https://es.reactjs.org/)
- [node.js](https://nodejs.org/es/)
- [NPM](https://www.npmjs.com/)
- [babel](https://babeljs.io/)
- [JSX syntax](https://es.reactjs.org/docs/introducing-jsx.html)
- [react router](https://reactrouter.com/)
- [Firefox](https://www.mozilla.org/es-ES/firefox/new/)

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
>
> React will create react componenets, react-dom is is how add them to the page, and react scripts is how we handle the bundling.

- `node -v`
- `npx create-react-app my-app`
- `cd my-app`
- `npm start`
- open [http://localhost:3000](http://localhost:3000) to view it in the browser.

> if download the code from github, you need to install the dependencies with `npm install`

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

## useState hook

> useState is a hook that allows you to add state to functional components

- `import React, { useState } from 'react'`

```JSX
const [name, setName] = useState('John')
```

- `name` is the state
- `setName` is the function that allows you to change the state
- `useState` is the hook
- `useState('John')` is the initial value of the state

## useEffect hook

> useEffect is a hook that allows you to add side effects to functional components

- `import React, { useState, useEffect } from 'react'`

```JSX
useEffect(() => {
  console.log('render')
}, [name])
```

- `useEffect` is the hook
- `useEffect(() => { console.log('render') }, [name])` is the function that will be executed when the component is rendered
- `[name]` is the dependency array, if the state `name` changes, the function will be executed

### dependecy array

- if the dependency array is empty, the function will be executed only once when the component is rendered
- if the dependency array is not empty, the function will be executed when the component is rendered and when the state in the dependency array changes
- if more than one state is in the dependency array, the function will be executed when any of the states changes

## reducer hook

> reducer is a hook that allows you to add state to functional components

- `import React, { useReducer } from 'react'`

```JSX
const [state, dispatch] = useReducer(reducer, initialState)
```

- `state` is the state
- `dispatch` is the function that allows you to change the state
- `useReducer` is the hook
- `useReducer(reducer, initialState)` is the reducer function and the initial value of the state

## forms

### useRef hook

> useRef is a hook that allows you to add state to functional components
>
> Is used to get the value of an input

- `import React, { useRef } from 'react'`

```JSX
const inputRef = useRef()
```

- `inputRef` is the state
- `useRef` is the hook
- `useRef()` is the initial value of the state

## form libraries

- [Formik](https://formik.org/)
- [React Hook Form](https://react-hook-form.com/)
- [React Final Form](https://final-form.org/react)
- [React Form](https://react-form.js.org/)
- [Use Hook Form](https://usehooks.com/useForm/)

## react router

> React Router is a collection of navigational components that compose declaratively with your application. Whether you want to have bookmarkable URLs for your web app or a composable way to navigate in React Native, React Router works wherever React is rendering--so take your pick!

- `npm install react-router-dom`

## testing

- `npm test`

### resources for testing

- [Jest](https://jestjs.io/)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
- [Enzyme](https://enzymejs.github.io/enzyme/)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)

### jest

> Jest is a delightful JavaScript Testing Framework with a focus on simplicity.

- Jest will run all the test in the project with `.test.js` or `.spec.js` extension

### react testing library

> The React Testing Library is a very light-weight solution for testing React components. It provides light utility functions on top of react-dom and react-dom/test-utils, in a way that encourages better testing practices.

## React icons

- `npm install react-icons --save` install the react icons library as a dependency
- usage

```JSX
import { ICONNAME } from 'react-icons/bs

< ICONNAME />
```

- [react icons](https://react-icons.github.io/react-icons/)

## Tailwind css

- [Tailwind css](https://tailwindcss.com/docs/guides/create-react-app)

- `npm install -D tailwindcss postcss autoprefixer`
- `npm install -D @tailwindcss/forms`
- `npx tailwindcss init -p`

## install CRACO

> Create React App Configuration Override

- `npm install @craco/craco`

- modify `package.json`

```JSON
"scripts": {
  "start": "craco start",
  "build": "craco build",
  "test": "craco test"
},
```

- create `craco.config.js`

```JS
module.exports = {
    style: {
        postcss: {
            plugins: [
                require('tailwindcss'),
                require('autoprefixer'),
            ],
        },
    },
}
```

## config tailwind

- create `tailwind.config.js`

```JS
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')],
}
```

- modify the `index.css`

```CSS
@tailwind base;
@tailwind components;
@tailwind utilities;
```


## Author

[![Twitter](https://img.shields.io/twitter/follow/ralex_uy?style=social)](https://twitter.com/ralex_uy) <!-- twitter -->
[![Linkedin](https://img.shields.io/badge/LinkedIn-+28K-blue?style=social&logo=linkedin)](https://www.linkedin.com/in/ronald-rivero/) <!-- linkedin -->
[![Github](https://img.shields.io/github/followers/ralexrivero?style=social)](https://github.com/ralexrivero/) <!-- github -->
[![Vagrant](https://img.shields.io/static/v1?label=&message=Vagrant%20Profile&color=1868F2&logo=vagrant&labelColor=2F333A)](https://app.vagrantup.com/ralexrivero) <!-- vagrant -->
[![Docker](https://img.shields.io/static/v1?label=&message=Docker%20Profile&color=2496ED&logo=Docker&labelColor=2F333A)](https://hub.docker.com/u/ralexrivero) <!-- docker -->
