This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) template.

# number-2-word

> Keyboard that returns T9 like text response for any given number(s)

## Getting Started

In the project directory, you can run:

### `npm install`

Install all the project dependencies.

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />

## Limitations and other considerations

1. No styling strategy was applied. All was done using Material UI components and inline styles for simplicity.
2. Since the backend won't handle edge cases, numbers 1 and 0 are not currently selectable.
3. Redux implementation is pretty basic, I focused more on the use of React Hooks.
4. Unit tests are not comprehensive, just a few ones in the reducer as a demo.
