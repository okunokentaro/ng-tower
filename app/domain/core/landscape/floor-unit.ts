import {AbstractUnit} from '../abstract/abstract-unit';

export class FloorUnit extends AbstractUnit {

  add(other: FloorUnit): FloorUnit {
    return new FloorUnit(this.value + other.value);
  }

}
