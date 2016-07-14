import {Component} from '@angular/core';
import {AppDispatcher} from "./app.dispatcher";
import {AppStore} from "./app.store";

@Component({
  selector  : 'tw-app',
  directives: [],
  providers : [
    AppDispatcher,
    AppStore
  ],
  template  : `
    <div>ng-tower</div>
  `
})
export class AppComponent {

  constructor(private dispatcher: AppDispatcher,
              private store: AppStore) {
    // noop
  }

  ngOnInit(): void {
    this.store.observable.subscribe((state) => {
      console.log(state);
    });
  }

}
