import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Rx';

import {WindowProvider} from './window-provider.service';

@Injectable()
export class FrameService {

  readonly frameLength: number;

  private window: Window;

  private startTime: number;
  private fps: number; // When fps is 24, 1 minute is equal to 12 hours in the game.

  private subject: Subject<number>;

  constructor(windowProvider: WindowProvider) {
    this.window = windowProvider.getWindow();

    this.startTime   = this.window.performance.now();
    this.fps         = 240;
    this.frameLength = 12 * 60 * 2; // h * m * resolution

    this.subject = new Subject<number>();
  }

  run(): void {
    const loop = () => {
      requestAnimationFrame(loop);
      const lastTime = this.window.performance.now();
      const frame    = Math.floor(
        (lastTime - this.startTime) / (1000.0 / this.fps) % this.frameLength
      );
      this.subject.next(frame);
    };
    loop();
  }

  /**
   * @return disposer
   */
  subscribe(observer: (frame: number) => void): () => void {
    const subscription = this.subject.subscribe(observer);
    return () => subscription.unsubscribe();
  }

}
