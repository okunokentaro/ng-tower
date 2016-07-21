import {FloorUnit} from '../../core/landscape/floor-unit';
import {LevelUnit} from '../../core/landscape/level-unit';
import {Building} from '../../core/landscape/building';

const floorWidth  = 8;
const floorHeight = 36;

export function renderingWidth(floor: FloorUnit): string {
  return `${floor.value * floorWidth}px`;
}

export function renderingHeight(level: LevelUnit): string {
  return `${level.value * floorHeight}px`;
}

export class Landscape {

  static blankLandscape(): Landscape {
    return new Landscape(new Building());
  }

  constructor(private building: Building) {
    //
  }

  renderingWidth(): string {
    const unit = this.building.totalFloorUnit();
    return renderingWidth(unit);
  }

  renderingHeight(): string {
    const unit = this.building.totalLevelUnit();
    return renderingHeight(unit);
  }

}
