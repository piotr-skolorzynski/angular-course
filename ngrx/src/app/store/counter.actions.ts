import { createAction, props } from '@ngrx/store';
import { DECREMENT, INCREMENT } from './counter.reducer';

export const init = createAction('[Counter] Init');

export const set = createAction('[Counter] Set', props<{ value: number }>());

export const increment = createAction(INCREMENT, props<{ value: number }>());

export const decrement = createAction(DECREMENT, props<{ value: number }>());
