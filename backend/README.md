# number-2-word

> A REST API to return a T9 like response

## About

This project uses [Feathers](http://feathersjs.com). An open source web framework for building modern real-time applications.

## Getting Started

1. Make sure you have [NodeJS](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed.
2. Install your dependencies

    ```npm install```

3. Start your app

    ```npm start```

## Testing

Simply run `npm test` and all your tests in the `__tests__` directory will be run.


## Using the service

The server will start at ```http://localhost:3030/```

There is a single ```/api``` endpoint which allows only GET requests with the following parameters:

```search={numericString}``` the numberic values to be converted to words. 

```useDictionary=true|false``` **optional** filters the converted strings to match a dictionary with real words

Usage URL example: ```GET http://localhost:3030/api?search={numericString}&useDictionary=true|false```


## Limitations and considerations

1. The endpoint will filter and allow only numeric values between 2-9. Use cases for 0, 1, #, *, empty spaces and any other string are not being handled.
2. The current unit tests are unified on the controller file for simplicity, instead of separated on the service implementation.