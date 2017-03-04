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

    it('should return result of addition of args', () => {
      const arr = tabledriven([ [1, 2], [2, 2] ], add)
      assert.deepEqual(arr, [ 3, 4 ])
    })
  })

  describe('Test as failure', () => {
    it('sould be failure as zero argument', () => {
      assert.throws(() => { tabledriven() }, /any arguments/)
    })

    it('sould be failure as too few arguments', () => {
      assert.throws(() => { tabledriven([1, 2]) }, /is 2/)
    })

    it('should be that the first argument is an array type', () => {
      assert.throws(() => { tabledriven('foo', (x) => { return x }) }, /an array type/)
    })

    it('should be that the first argument is an function type', () => {
      assert.throws(() => { tabledriven([1, 2], [1, 2]) }, /an function type/)
    })
  })
})
