import { Actions, createEffect, ofType } from '@ngrx/effects';
import { decrement, increment, init } from './counter.actions';
import { tap, withLatestFrom } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectCount } from './counter.selector';
import { Injectable } from '@angular/core';

@Injectable()
export class CounterEffects {
  loadCount = createEffect(() =>
    this.actions$.pipe(
      ofType(init),
      switchMap(() => {
        const storedCounter = localStorage.getItem('count');
        if (storedCounter) {
          return of(set({ value: Number(storedCounter) }));
        }
        return of(set({ value: 0 }));
      })
    )
  );

  saveCount = createEffect(
    () =>
      this.actions$.pipe(
        ofType(increment, decrement),
        withLatestFrom(this.store.select(selectCount)),
        tap(([action, counter]) => {
          console.log(action);
          localStorage.setItem('count', counter.toString());
        })
      ),
    { dispatch: false }
  );

  //dollar sign suggests that it is an observable
  constructor(
    private actions$: Actions,
    private store: Store<{ value: number }>
  ) {}
}
