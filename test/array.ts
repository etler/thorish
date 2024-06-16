import test from 'node:test';
import * as assert from 'node:assert';
import * as array from '../src/array.js';

test('findAllIndex', () => {
  const arr = [1, 2, 3, 4, 2];
  const index = array.findAllIndex(arr, (x) => x === 2);
  assert.deepStrictEqual(index, [1, 4]);
});

test('sub', () => {
  const arr = ['a', 'b', 'c', 'b', 'c'];
  assert.strictEqual(array.findSubArray(arr, ['b', 'c']), 1);
  assert.strictEqual(array.findSubArray(arr, ['b', 'c', 'a']), -1);
  assert.strictEqual(array.arrayContainsSub(arr, ['b', 'c']), true);

  // empty array should be at index zero
  assert.strictEqual(array.findSubArray(arr, []), 0);

  // empty array is in empty array at zero
  assert.strictEqual(array.findSubArray([], []), 0);

  // can't find in empty array
  assert.strictEqual(array.findSubArray([], ['cannot be found']), -1);
});
