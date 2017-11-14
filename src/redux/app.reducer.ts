import { ActionReducerMap } from '@ngrx/store';

import { AppState } from './app.state';
import { counterReducer } from './counter/counter.reducer';

export const AppReducer: ActionReducerMap<AppState> = {
  counter: counterReducer,
};
