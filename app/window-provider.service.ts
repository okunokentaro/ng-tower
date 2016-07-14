import {Injectable} from '@angular/core';

@Injectable()
export class WindowProvider {

  getWindow(): Window {
    return window;
  }

}
