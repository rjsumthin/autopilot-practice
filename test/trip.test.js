const test = require('node:test');
const assert = require('node:assert');

// Trip test: this test fails on purpose so the required check blocks merging.
test.skip('trip test: deliberately failing', () => {
  assert.strictEqual(1 + 1, 3);
});
