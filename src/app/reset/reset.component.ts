import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Store, Action } from '@ngrx/store';

import { AppState } from './../../redux/app.state';
import { ResetAction } from './../../redux/counter/counter.actions';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ResetComponent implements OnInit {

  counter = 0;

  constructor(
    private store: Store<AppState>
  ) {
    this.readState();
  }

  ngOnInit() {
  }

  reset() {
    const action = new ResetAction();
    this.store.dispatch(action);
  }

  private readState() {
    this.store.select('counter')
    .subscribe((counterState) => {
      this.counter = counterState;
    });
  }

}
