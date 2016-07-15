import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Rx';

import {Frame} from './domain/core/frame/frame';
import {WindowProvider} from './window-provider.service';

@Injectable()
export class FrameService {

  readonly frameLength: number;

  private window: Window;

  private startTime: number;
  private fps: number; // When fps is 24, 1 minute is equal to 12 hours in the game.

  private subject: Subject<Frame>;

  constructor(windowProvider: WindowProvider) {
    this.window = windowProvider.getWindow();

    this.startTime   = this.window.performance.now();
    this.fps         = 24;
    this.frameLength = 12 * 60 * 2; // h * m * resolution

    this.subject = new Subject<Frame>();
  }

  run(): void {
    let loop = () => {
      requestAnimationFrame(loop);
      const lastTime = this.window.performance.now();
      const frame    = ~~(
        (lastTime - this.startTime) / (1000.0 / this.fps)
      ); // Math.floor hack
      this.subject.next(new Frame(frame));
    };
    loop();
  }

  /**
   * @return disposer
   */
  subscribe(observer: (f: Frame) => void): () => void {
    const subscription = this.subject.subscribe(observer);
    return () => subscription.unsubscribe();
  }

}
