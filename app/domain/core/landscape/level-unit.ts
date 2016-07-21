import {AbstractUnit} from '../abstract/abstract-unit';

export class LevelUnit extends AbstractUnit {

  add(other: LevelUnit): LevelUnit {
    return new LevelUnit(this.value + other.value);
  }

}
