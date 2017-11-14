import { Action } from '@ngrx/store';

export const INCREMENT = '[Counter] increment';
export const DECREMENT = '[Counter] decrement';
export const PLUS = '[Counter] plus';
export const RESET = '[Counter] reset';

export class IncrementAction implements Action {
  readonly type = INCREMENT;
}

export class DecrementAction implements Action {
  readonly type = DECREMENT;
}

export class ResetAction implements Action {
  readonly type = RESET;
}

export class PlusAction implements Action {
  readonly type = PLUS;

  constructor(
    public payload: number
  ) { }
}

export type AllActions =  IncrementAction | DecrementAction | ResetAction | PlusAction;
