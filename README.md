# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Dependent installations:

- [Node 16](https://nodejs.org/en/blog/release/v16.16.0)
- [yarn](https://classic.yarnpkg.com/lang/en/docs/install/#mac-stable) (can use npm that comes with node instead... you won't be able to tell a difference. I use yarn though)

## Running the app

1. `yarn install`
2. `yarn start` Runs the app at http://localhost:3000
3. The app should hot reload/update as you save changes. If its doing something weird, restart the app as hot reloading is not a 100% guarantee

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## About

- Entry point in src/index.js
- You will add new pages(routes) to src/App/App.jsx
- utilizes https://github.com/matijagaspar/ws-avc-player for the video player

## New Components and CSS

- Was able to spin this up quickly using [material-ui components](https://mui.com/material-ui/react-button/). They have live demos in the browser showing exactly how to use them. This is built and maintained by facebook so there is a ton of docs/google-able examples.
- there are a couple ways to write/handle css in react.
  - src/NavBar/NavBar.jsx handles the css in objects in the same file as the js/html code
  - src/pages. Any page I initially wrote has a separate css file. This is the more traditional and organized way of doing it. classnames in this file need to correspond with the jsx/react component it is imported in.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
