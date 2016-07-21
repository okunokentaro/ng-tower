import {Level, maxLevel} from './level';
import {FloorUnit} from './floor-unit';
import {LevelUnit} from './level-unit';

export class Building {

  private building: Level[];

  constructor() {
    this.building = Building.emptyBuilding();
  }

  static emptyBuilding(): Level[] {
    let building = [] as Level[];
    for (let i = 0; i < maxLevel.value; i++) {
      building[i] = Level.emptyLevel();
    }

    return building;
  }

  totalFloorUnit(): FloorUnit {
    return this.building[0].count();
  }

  totalLevelUnit(): LevelUnit {
    return new LevelUnit(this.building.length);
  }

}
