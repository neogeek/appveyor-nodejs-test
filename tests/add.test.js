const { test } = require('node:test');
const assert = require('node:assert');

const { add } = require('../src/index');

test('adding two numbers together', (t) => {
  assert.strictEqual(add(1, 2), 3);
});

test('throw error when first parameter is not a number', (t) => {
  assert.throws(
    () => {
      // @ts-ignore
      add('test', 2);
    },
    {
      name: 'TypeError',
      message: 'The value for a is not a valid number.',
    }
  );
});

test('throw error when second parameter is not a number', (t) => {
  assert.throws(
    () => {
      // @ts-ignore
      add(1, 'test');
    },
    {
      name: 'TypeError',
      message: 'The value for b is not a valid number.',
    }
  );
});
