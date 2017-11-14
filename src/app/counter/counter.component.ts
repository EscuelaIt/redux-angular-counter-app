import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Store, Action } from '@ngrx/store';

import { AppState } from './../../redux/app.state';
import { DecrementAction, PlusAction} from '../../redux/counter/counter.actions';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CounterComponent implements OnInit {

  counter: number;

  constructor(
    private store: Store<AppState>
  ) {
    this.store.select('counter')
    .subscribe((counterState) => {
      this.counter = counterState;
    });
  }

  ngOnInit() {
  }

  decrement() {
    const action = new DecrementAction();
    this.store.dispatch(action);
  }

  plus() {
    const action = new PlusAction(6);
    this.store.dispatch(action);
  }

}
