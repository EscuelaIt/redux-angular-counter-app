import { Action } from '@ngrx/store';

import { INCREMENT, DECREMENT, PLUS, RESET, AllActions } from './counter.actions';

export function counterReducer(state: number = 102, action: AllActions): number {
  if (action === null) {
    return state;
  }
  switch (action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    case PLUS:
      return state + action.payload;
    case RESET:
      return 0;
    default:
      return state;
  }
}
