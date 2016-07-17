import {AnyVal} from '../abstract/any-val';

export abstract class AbstractUnit extends AnyVal<number> {

  abstract add(other: AbstractUnit): AbstractUnit;

}
