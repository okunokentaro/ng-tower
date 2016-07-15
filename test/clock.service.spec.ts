import 'core-js';
import * as assert from 'power-assert';

import {getTimes} from '../app/clock.service';

describe('ClockService', () => {
  describe(`getTimes`, () => {
    it('0 should be [0, 0]', () => {
      assert.deepEqual(getTimes(0), [0, 0]);
    });

    it('1.5 should be [0, 1]', () => {
      assert.deepEqual(getTimes(1.5), [0, 1]);
    });

    it('59 should be [0, 59]', () => {
      assert.deepEqual(getTimes(59), [0, 59]);
    });

    it('60 should be [1, 0]', () => {
      assert.deepEqual(getTimes(60), [1, 0]);
    });

    it('719 should be [11, 59]', () => {
      assert.deepEqual(getTimes(719), [11, 59]);
    });
  });
});
