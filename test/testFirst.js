const fib = require('./fibonacci.js');
const assert = require('assert');
describe('Fibonacci', () => {
  it('should return 21 when given 8 as an input', () => {
    assert.strictEqual(fib(8), 21)
  });
  it('should return least six sig figs 930352 when given 36 as an input. not return 14930352', () => {
    assert.strictEqual(fib(36), 930352)
  });
  // context('my own test cases', () => {
  //   it('Fibonacci 0,1,1,2,3', () => {
  //     assert.strictEqual(fib(0), 0)
  //     assert.strictEqual(fib(1), 1)
  //     assert.strictEqual(fib(2), 1)
  //     assert.strictEqual(fib(3), 2)
  //     assert.strictEqual(fib(4), 3)
  //   });
  //   it('Fibonacci test cases from a friend', () => {
  //     assert.strictEqual(fib(50), 269025)
  //     assert.strictEqual(fib(100), 915075)
  //     assert.strictEqual(fib(1000), 228875)
  //     assert.strictEqual(fib(10000), 366875)
  //     assert.strictEqual(fib(100000), 746875)
  //     assert.strictEqual(fib(1000000), 546875)
  //   });
  // });
})