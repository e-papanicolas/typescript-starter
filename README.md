# typescript-starter

A boilerplate for getting started with node.js &amp; typescript.

## Dev startup

1. running `npm start:dev` will start up the environment in development mode, using nodemon for cold reloading

2. running `npx tsc` will compile the code

### Dependencies

- `eslint-config-prettier` Turns off all ESLint rules that have the potential to interfere with Prettier rules.
- `eslint-plugin-prettier` Turns Prettier rules into ESLint rules

## Production

### Creating production builds

1. running `npm build` will rimraf will remove old build folder before TypeScript compiler emits new code to dist

### Production startup

1. running `npm start` will execute the build command, and then execute the compiled JS at `build/index.js`

## NOTES

1. Bundlers: WebPack, ESBuild ... converts code and files into minified and merged output files, with unique names to avoid cache issues
2. Transpilers: Gulp, Grunt ... checking for type safety by converting to JS before execution
3. Task runners: tool that manipulates the source files or runs commands and does a variety of tasks including but not limited to minification, compilation, unit testing, linting, etc. repetitive tasks
