import {AbstractFloor} from './abstract-floor';
import {EmptySpace} from './empty-space';
import {maxFloor} from './floor';
import {LevelUnit} from "./level-unit";

export const maxLevelGround   = new LevelUnit(100);
export const maxLevelBasement = new LevelUnit(10);
export const maxLevel         = maxLevelGround.add(maxLevelBasement);

export class Level {

  static emptyLevel(): Level {
    let level = [] as AbstractFloor[];
    for (let i = 0; i < maxFloor.value; i++) {
      level[i] = new EmptySpace();
    }
    return new Level(level);
  }

  constructor(private floors: AbstractFloor[]) {
    // noop
  }

  count(): number {
    return this.floors.length;
  }

}
