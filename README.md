# typescript-starter

A boilerplate for getting started with node.js &amp; typescript.

## Dev startup

1. running `npm start:dev` will start up the environment in development mode, using nodemon for cold reloading

2. running `npx tsc` will compile the code

### Creating production builds

1. running `npm build` will rimraf will remove old build folder before TypeScript compiler emits new code to dist

### Production startup

1. running `npm start` will execute the build command, and then execute the compiled JS at `build/index.js`
