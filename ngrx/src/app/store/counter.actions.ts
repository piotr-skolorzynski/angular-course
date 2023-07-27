import { Action, createAction, props } from '@ngrx/store';
import { INCREMENT } from './counter.reducer';

// export const increment = createAction(
//   '[Counter] Increment',
//   props<{ value: number }>()
// );

export class IncrementAction implements Action {
  readonly type = INCREMENT;

  constructor(public value: number) {}
}

export type CounterActions = IncrementAction;
