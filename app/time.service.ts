import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Rx';

import {WindowProvider} from './window-provider.service';

@Injectable()
export class TimeService {

  private window: Window;

  private startTime: number;
  private fps: number;
  private frameLength: number;

  private subject: Subject<number>;

  constructor(windowProvider: WindowProvider) {
    this.window = windowProvider.getWindow();

    this.startTime   = this.window.performance.now();
    this.fps         = 30;
    this.frameLength = 6;

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
