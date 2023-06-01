# Cross Browser Extension MV3 Demo

![build](https://github.com/AlexLeoTW/cross-browser-mv3-demo/workflows/build/badge.svg)

Cross Browser Extension, TypeScript and Visual Studio Code

> **Note**: this is very much a proof of concept and not intended for production use.

## Prerequisites

- [node + npm](https://nodejs.org/) (Current Version)

## Option

- [Visual Studio Code](https://code.visualstudio.com/)

## Includes the following

- TypeScript
- Webpack
- React
- Jest
- Example Code
  - Chrome Storage
  - Options Version 2
  - content script
  - count up badge number
  - background

## Project Structure

- src/typescript: TypeScript source files
- src/assets: static files
- dist: Chrome Extension directory
- dist/js: Generated JavaScript files

## Setup

```sh
npm install
```

## Import as Visual Studio Code project

...

## Build

```sh
npm run build:firefox
npm run build:chromium
```

## Build in watch mode

### terminal

```sh
npm run watch:firefox
npm run watch:chromium
```

### Visual Studio Code

Run watch mode.

type `Ctrl + Shift + B`

## Load extension to chrome

Load `dist` directory

## Test

`npx jest` or `npm run test`
