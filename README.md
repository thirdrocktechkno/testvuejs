# testvuejs

> A VueJs Micro Project with using Github API. In this project, we used

- components based architecture,
- vue-router for routing,
- bootstrap/jquery/popper.js for UI styling
- webpack for production build with minification

## Install dependency to execute project

- Node 8 >=
- Clone repo with git clone https://github.com/thirdrocktechkno/testvuejs.git
- cd testvuejs

## Serve Project for development

```bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev
```

## Build Setup for production & run with single command with "npm run build"

```bash
# install dependencies
npm install

# build for production with minification which run at localhost:8080
npm run build
```

## NPM Scripts Description

```bash
# Run project in development mode
npm run dev

# Make production build and run it with npm run build:serve
npm run build

# Move dist/build.js & index.html which contains our final production code to # build folder &
# updated build.js file with build#hash.js in appropriate place within build folder to avoid
# caching issue & serve build folder via http-server npm package
npm run build:serve
```
