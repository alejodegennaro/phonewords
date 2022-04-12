# Phonewords

React app with a Node backend that converts a given numeric string into a list of corresponding words in the style of T9 or Phonewords.

## Getting Started

On each project directory, you can run:

### `npm install`

Install all the project dependencies.

### `npm start`

Runs the app in the development mode.<br />

## Overall Limitations and other considerations

### Backend
**Please see the project README for additional info regarding endpoints**

1. The endpoint will filter and allow only numeric values between 2-9. Use cases for 0, 1, #, *, empty spaces and any other string are not being handled.
2. The current unit tests are unified on the controller file for simplicity, instead of separated on the service implementation.

### Frontend

1. No styling strategy was applied. All was done using Material UI components and inline styles for simplicity.
2. Since the backend won't handle edge cases, numbers 1 and 0 are not currently selectable.
3. Redux implementation is pretty basic, I focused more on the use of React Hooks.
4. Unit tests are not comprehensive, just a few ones in the reducer as a demo.
