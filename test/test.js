import { assert } from 'chai';
import { multiply } from '../index.js';

describe('Multiply function testing', () => {
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
