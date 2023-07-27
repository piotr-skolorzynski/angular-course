import { createAction, props } from '@ngrx/store';
import { DECREMENT, INCREMENT } from './counter.reducer';

export const increment = createAction(INCREMENT, props<{ value: number }>());

export const decrement = createAction(DECREMENT, props<{ value: number }>());
