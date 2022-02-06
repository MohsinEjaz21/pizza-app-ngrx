import { Injectable } from "@angular/core";
import { Actions, Effect } from "@ngrx/effects";
import * as fromServices from '@products/services/toppings.service';
import { of } from 'rxjs/observable/of';
import { catchError, map, switchMap } from 'rxjs/operators';
import * as toppingsAction from './../actions/toppings.action';


@Injectable()
export class ToppingsEffect {
  constructor(
    private actions$: Actions,
    private toppingsService: fromServices.ToppingsService
  ) { }

  @Effect()
  loadToppings = this.actions$
    .ofType(toppingsAction.LOAD_TOPPINGS)
    .pipe(switchMap(() => {
      return this.toppingsService.getToppings().pipe(
        map(toppings => new toppingsAction.LoadToppingsSuccess(toppings)),
        catchError(error => of(new toppingsAction.LoadToppingsFail(error)))
      )
    }))
}
