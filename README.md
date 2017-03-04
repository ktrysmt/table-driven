# table-driven

> A small and simple table driven module for NodeJS

## Install

```
npm install table-driven
```

## Basic usage

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
