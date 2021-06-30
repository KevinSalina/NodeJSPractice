const describe = require('mocha').describe
const it = require('mocha').it
const expect = require('chai').expect
const sumAll = require('../calculation.js')

describe('calculation', () => {
  describe('sumALL', () => {
    it('return the sum of the numbers in the array provided', () => {
      // data to be tested
      const nums = [1, 2, 3, 4]

      // call the function with the test data
      const total = sumAll(nums)

      // assets what should be true
      expect(total).to.equal(10)
    })
  })
})