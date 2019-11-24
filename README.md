<p align="center">
  <img src="./.github/logo.png" width="150px" />
</p>

<h1 align="center">React + Web3.js - Simple Coin Example</h1>

<p align="center">
  This creates a project <strong>boilerplate</strong> for <strong>React</strong> with a custom stack for Ethereum development
</p>

<p align="center">
  <a href='https://gemnasium.com/github.com/DalderupMaurice/react-web3-coin-example'>
    <img src="https://gemnasium.com/badges/github.com/DalderupMaurice/react-web3-coin-example.svg" alt="Dependency Status" />
  </a>
  <a href="https://deepscan.io/dashboard#view=project&pid=xxx&bid=xxx">
    <img src="https://deepscan.io/api/projects/xxxx/branches/xxxx/badge/grade.svg" alt="DeepScan grade">
  </a>
  <img src='https://bettercodehub.com/edge/badge/DalderupMaurice/react-web3-coin-example?branch=master'>
  <a href='https://github.com/prettier/prettier'>
    <img src='https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat'>
  </a>
</p>

## Purpose

The goal of this project is to provide a quickstart in React with various, albeit opinionated, dependencies already installed and configured. Additionally, it's a way to provide good practices for repo management.

In this repo you can find:

- React, our framework of choice
- SCSS
- Jest, a testing framework
- Babel, transpiling React and ES6 made ezpz
- Parcel, a kickass bundler
- Prettier and ESLint, kickass linting support

Also some plugins:

- vendor prefixing, camelCase and global styling JSS plugins
- env and React Babel presets
- babel-polyfill
- React and Prettier ESLint plugins

And finally some testing and security:

- Travis CI, automated builds/testing
- Coveralls, code coverage
- Deepscan and Better Code Hub, code analysis
- Gemnasium and Renovate, dependency monitoring

## Setup

```bash
git clone https://github.com/DalderupMaurice/react-web3-coin-example.git my-app-name
cd my-app-name
yarn
yarn start
```

Change `README.md` and `package.json` to fit your project needs. Delete `LICENSE` if not applicable.

## Testing

Use `yarn test:local` or `npm run test:local` to run all tests locally. The `test` command is reserved for CI builds.
