# table-driven

[![npm version](https://badge.fury.io/js/table-driven.svg)](https://badge.fury.io/js/table-driven)
[![CircleCI](https://circleci.com/gh/ktrysmt/table-driven.svg?style=shield)](https://circleci.com/gh/ktrysmt/table-driven)

> A small and simple table driven module for NodeJS

## Requirement

- NodeJS >= v7.6

## Install

```
npm install table-driven
```

## Usage

### Basic 

```js
const tabledriven = require('table-driven')

const add = function (a, b) {
  return a + b
}

const result = tabledriven([
  [ 1, 2 ],
  [ 3, 4 ],
  [ 5, 6 ],
], add)

console.log(result) // [ 3, 7, 11 ]
```

### Use as async

If give third argument as true then return a promise object and pass to `then` or `catch` as method chain.

```js
const tabledriven = require('table-driven')

const pow = function (a) {
  return a ** a
}

tabledriven([ 1, 2, 3 ], add, true).then((result) => {
    console.log(result) // [ 1, 4, 27 ]
})      
```

### with Mocha

Also use in the testing framework. Example is;

```js
const assert = require('assert')
const tabledriven = require('table-driven')

describe('Test tabledriven as sync', () => {
  describe('Each one argument', () => {
    const markup = function (a) {
      return '<' + a + '>'
    }
    it('should return markuped string', () => {
      const arr = tabledriven(
          [
            1, 
            2
          ]
          , markup)
      assert.deepEqual(arr, [ '<1>', '<2>' ])
    })
  })

  describe('Each two arguments', () => {
    const add = function (a, b) {
      return a + b
    }
    it('should return result of addition of args', () => {
      const arr = tabledriven(
          [ 
            [ 1, 2 ], 
            [ 2, 2 ]
          ]
          , add)
      assert.deepEqual(arr, [ 3, 4 ])
    })
  })
}) 
```

## Author

[ktrysmt](https://twitter.com/ktrysmt)

## License

[MIT](./LICENSE)
