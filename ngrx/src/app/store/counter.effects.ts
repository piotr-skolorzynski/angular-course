import { Actions, createEffect, ofType } from '@ngrx/effects';
import { decrement, increment } from './counter.actions';
import { tap } from 'rxjs';

// export class CounterEffects {
//   saveCount = createEffect(
//     () =>
//       this.actions$.pipe(
//         //this operator lets define which actions we want to continue
//         //this will be executed always if chosen type of action is dispatched
//         ofType(increment, decrement),
//         tap((action: any) => {
//           console.log(action);
//           localStorage.setItem('count', action.value.toString());
//         })
//       ),
//     { dispatch: false }
//   );

//   //dollar sign suggests that it is an observable
//   constructor(private actions$: Actions) {}
// }

export class CounterEffects {
  @Effect({ dispatch: false })
  saveCount = () =>
    this.actions$.pipe(
      //this operator lets define which actions we want to continue
      //this will be executed always if chosen type of action is dispatched
      ofType(increment, decrement),
      tap((action: any) => {
        console.log(action);
        localStorage.setItem('count', action.value.toString());
      })
    );

  constructor(private actions$: Actions) {}
}
