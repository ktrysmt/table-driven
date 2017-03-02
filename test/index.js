const assert = require('assert')
const tabledriven = require('../lib/index.js')

describe('Test tabledriven as sync', () => {
  describe('Each one argument', () => {
    const markup = function (a) {
      return '<' + a + '>'
    }
    it('should return markuped string', () => {
      const arr = tabledriven([1, 2], markup)
      assert.deepEqual(arr, [ '<1>', '<2>' ])
    })
  })

  describe('Each two arguments', () => {
    const add = function (a, b) {
      return a + b
    }
    it('should return markuped string', () => {
      const arr = tabledriven([ [1, 2], [2, 2] ], add)
      assert.deepEqual(arr, [ 3, 4 ])
    })
  })
})
