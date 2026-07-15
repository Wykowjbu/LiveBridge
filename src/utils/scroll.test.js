import assert from 'node:assert/strict';
import test from 'node:test';

import { isNearBottom } from './scroll.js';

test('isNearBottom detects bottom and near-bottom scroll positions', () => {
  assert.equal(isNearBottom({ scrollHeight: 1000, clientHeight: 500, scrollTop: 500 }), true);
  assert.equal(isNearBottom({ scrollHeight: 1000, clientHeight: 500, scrollTop: 455 }), true);
  assert.equal(isNearBottom({ scrollHeight: 1000, clientHeight: 500, scrollTop: 451 }, 48), false);
});
