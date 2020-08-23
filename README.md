# React Starter

This is simple CRA that include Routing, Redux and Mock REST API.

## Technologies

- [**Create React App**](https://create-react-app.dev)
- [Jest](https://jestjs.io) for running unit tests;
- [React Testing Library](https://github.com/testing-library/react-testing-library) for unit test assertions;
- [Cypress](https://cypress.io) for running E2E tests;
- [Mock Service Worker](https://mswjs.io) for mocking REST API;
- [Redux Toolkit](https://redux-toolkit.js.org) for managing redux easily;
- [React Router](https://reactrouter.com) for routing;

## Getting started

```bash
$ git clone https://github.com/sprabowo/react-redux-starter
$ cd react-redux-starter
$ yarn # npm install
```

## Running locally

```bash
$ yarn start
```

## Build production

```bash
$ yarn build
```

## Tests

### Unit tests

```bash
$ yarn test:unit
```

### E2E tests

```bash
$ yarn test:e2e
```

## Mock REST API

- [`src/mocks/handlers.js`](src/mocks/handlers.js) describes request handlers to use.

### Browser
useful for Integration Test

- [`src/mocks/browser.js`](src/mocks/browser.js) sets up the Service Worker.
- [`src/index.js`](src/index.js) conditionally enables mocking in `development` environment by uncomment the code.
- [`public/mockServiceWorker.js`](public/mockServiceWorker.js) the Service Worker, created by running `npx msw init public` or `yarn update:mocks`.

### NodeJS
useful for Unit Test

- [`src/mocks/server.js`](src/mocks/server.js) sets up the "server" to use the same mocking logic in Node.
- [`src/setupTests.js`](src/setupTests.js) enables mocking for unit tests via `beforeAll`/`afterAll` hooks.
