import 'core-js';
import * as assert from 'power-assert';

import {frameToTimes} from '../../../app/time.service';
import {Frame} from '../../../app/domain/core/frame/frame';
import {Day} from '../../../app/domain/core/time/day';
import {Hour} from '../../../app/domain/core/time/hour';
import {Minute} from '../../../app/domain/core/time/minute';

const parameterized = (param: Frame, expected: [Day, Hour, Minute]) => {
  it(`${param} should be [${expected}]`, () => {
    assert.deepEqual(frameToTimes(param), expected);
  });
};

describe('TimeService', () => {
  describe(`frameToTimes`, () => {
    parameterized(new Frame    (0), [new Day(0), new Hour( 0), new Minute( 0)]);
    parameterized(new Frame   (59), [new Day(0), new Hour( 0), new Minute(59)]);
    parameterized(new Frame   (60), [new Day(0), new Hour( 1), new Minute( 0)]);
    parameterized(new Frame (1439), [new Day(0), new Hour(23), new Minute(59)]);
    parameterized(new Frame (1440), [new Day(1), new Hour( 0), new Minute( 0)]);
    parameterized(new Frame(12345), [new Day(8), new Hour(13), new Minute(45)]);

    parameterized(new Frame(1.5), [new Day(0), new Hour(0), new Minute(1)]);
  });
});
