import 'core-js';
import * as assert from 'power-assert';

import {frameToTimes} from '../app/time.service';

const parameterized = (param: number, expected: [number, number, number]) => {
  it(`${param} should be [${expected}]`, () => {
    assert.deepEqual(frameToTimes(param), expected);
  });
};

describe('TimeService', () => {
  describe(`frameToTimes`, () => {
    parameterized(    0,   [0,  0,  0]);
    parameterized(    1.5, [0,  0,  1]);
    parameterized(   59,   [0,  0, 59]);
    parameterized(   60,   [0,  1,  0]);
    parameterized( 1439,   [0, 23, 59]);
    parameterized( 1440,   [1,  0,  0]);
    parameterized(12345,   [8, 13, 45]);
  });
});
