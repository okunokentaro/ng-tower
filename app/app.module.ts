import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppActions} from './app.actions';
import {AppDispatcher} from './app.dispatcher';
import {AppStore} from './app.store';
import {WindowProvider} from './window-provider.service';
import {FrameService} from './frame.service';
import {TimeService} from './time.service';

import {AppComponent} from './app.component';
import {LandscapeComponent} from './landscape.component';

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    AppComponent,
    LandscapeComponent
  ],
  providers : [
    AppActions,
    AppDispatcher,
    AppStore,
    WindowProvider,
    FrameService,
    TimeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}