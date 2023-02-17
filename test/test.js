import { assert } from 'chai';
import { multiply } from '../index.js';

describe('Multiply function testing', () => {
  it('Failing multiply test', () => {
    assert.equal(multiply(1, 1), 1);
  });
});
