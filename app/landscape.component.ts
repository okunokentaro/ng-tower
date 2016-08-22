import {Component} from '@angular/core';

import {Landscape} from './domain/application/landscape/landscape';
import {AppStore} from './app.store';
import {PartsOfDay} from './domain/core/parts-of-day/parts-of-day';

@Component({
  selector  : 'tw-landscape',
  directives: [],
  host: {
    '[style.display]': '"block"',
    '[style.width]'  : 'width',
    '[style.height]' : 'height'
  },
  template  : `
    <style>
      .block {
        display: block;
        width: 100%;
        height: 100%;
      }
      .dawn {
        background-color: #F3F5DF;
        color: #333;
        transition-property: background-color, color;
        transition-duration: 5s;
        transition-timing-function: ease-in;
      }    
      .morning {
        background-color: #CFEBF9;
        color: #333;
        transition-property: background-color, color;
        transition-duration: 5s;
        transition-timing-function: ease-in;
      }    
      .afternoon {
        background-color: #abd1ff;
        color: #333;
        transition-property: background-color, color;
        transition-duration: 5s;
        transition-timing-function: ease-in;
      }    
      .dusk {
        background-color: #F38F75;
        color: #333;
        transition-property: background-color, color;
        transition-duration: 5s;
        transition-timing-function: ease-in;
      }    
      .evening {
        background-color: #1C3370;
        color: #ddd;
        transition-property: background-color, color;
        transition-duration: 5s;
        transition-timing-function: ease-in;
      }
      .night {
        background-color: #121751;
        color: #ddd;
        transition-property: background-color, color;
        transition-duration: 5s;
        transition-timing-function: ease-in;
      }
    </style>
    <div [ngClass]="classSet()">landscape</div>
  `
})
export class LandscapeComponent {

  private landscape: Landscape;
  private partsOfDay: PartsOfDay;

  private width: string;
  private height: string;

  constructor(private store: AppStore) {
    // noop
  }

  ngOnInit(): void {
    this.store.getLandscape() .subscribe((s) => this.landscape = s);
    this.store.getPartsOfDay().subscribe((s) => this.partsOfDay = s);
  }

  ngAfterViewInit(): void {
    requestAnimationFrame(() => {
      this.width  = this.landscape.renderingWidth();
      this.height = this.landscape.renderingHeight();
    });
  }

  classSet(): any {
    return {
      [this.partsOfDay.className]: true,
      block                      : true
    };
  }

}
