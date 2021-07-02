# Introduction to CookBook

![Cookbook logo](https://ibb.co/SRqqFR1)
This app is an outcome of learning react. You can search recipes to get response from [Spooncacular](https://spoonacular.com/food-api/).

### LIVE VERSION

Check [Live version](https://mizuris.github.io/cookbook-app/) <- under this link.>

## Technologies

CookBook was created with usage of:

- [React](https://reactjs.org/)
- [Redux](https://redux.js.org/)
- [Material-ui](https://material-ui.com/)
- [Framer](https://www.framer.com/motion/)
- [Github](https://github.com/)
- [React-scroll](https://www.npmjs.com/package/react-scroll)

## Styling

Project is used by css-in-js, provided by MUI - makeStyles.

## RWD

App is designed mobile-first, fits all screen widths thanks to MUI's grid breakpoints and using resposive values for font sizes and margins/paddings.
![Desktop mockup](https://ibb.co/6bvc81T)
![Mobile mockup](https://ibb.co/syTbSt4)

## Usage

Project is React and Redux to manage and persist state of your recipes.
User is able to find recipes and then add them to favorites list. Items are stored in Redux store, they can be deleted and added freely.

## Why Redux?

I am aware of Redux purppose. The decision was made simply to showcase my skills of using this technology.

## Run the project

To start using project in code enviroment, copy this [repository](https://github.com/mizuris/cookbook-app.git) url and clone it to your repository.

### npm install

Run this command to install all dependencies required.

### npm start

Runs app on your [localhost](https://localhost:3000/) port in development mode.

### npm run deploy

Builds and deploys app to set homepage. You can change this adress in package.json file. This project uses [gh-pages](https://www.npmjs.com/package/gh-pages) for hosting.
