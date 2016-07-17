import 'core-js';
import * as assert from 'power-assert';

import {Building} from '../../../app/domain/core/landscape/building';
import {maxLevel} from '../../../app/domain/core/landscape/level';
import {maxFloor} from '../../../app/domain/core/landscape/floor';

describe('Building', () => {
  describe('.emptyBuilding()', () => {
    it('Length of building is equal to maxLevel', () => {
      const result = Building.emptyBuilding();
      assert(result.length === maxLevel.value);
    });

    it('One level is including maxFloor-pieces of floor', () => {
      const result = Building.emptyBuilding();
      assert(result[0].count() === maxFloor.value);
    });
  });
});
