import { assert } from 'chai';
import multiply from '../index.js';
import factorial from '../facto.js';

describe.skip('Multiply function testing', () => {
  it('Failing multiply test', () => {
    assert.equal(multiply(1, 1), 1);
  });

  it('Testing 2x2 ==4', () => {
    assert.equal(multiply(2, 2), 4);
  });

  it('Testing 3x3 == 9', () => {
    assert.equal(multiply(3, 3), 9);
  });

  it('Testing 4x4 == 4x4', () => {
    assert.equal(multiply(4, 4), 4 * 4);
  });
});

describe('Testing Factorial function', () => {
  it('Testing 0! === 1', () => {
    assert.equal(factorial(0), 1);
  });

  it('Testing 1! === 1', () => {
    assert.equal(factorial(1), 1);
  });

  it('Testing 2! === 2', () => {
    assert.equal(factorial(2), 2);
  });

  it('Testing 4! === 4x3x2x1', () => {
    assert.equal(factorial(4), 4 * 3 * 2 * 1);
  });

  it('Testing 5! === 120', () => {
    assert.equal(factorial(5), 120);
  });

  it('Testing -7! === Not an integer', () => {
    assert.equal(factorial(-7), 'N must be a positive integer');
  });

  it('Testing 8.5! === Not a number', () => {
    assert.isNotNumber(factorial(-7));
  });
});
