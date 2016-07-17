import {Level, maxLevel} from './level';

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

}