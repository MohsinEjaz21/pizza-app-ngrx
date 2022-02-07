import { Injectable } from "@angular/core";
import { Actions, Effect } from "@ngrx/effects";
import { of } from 'rxjs/observable/of';
import { catchError, map, switchMap } from 'rxjs/operators';
import * as fromServices from './../../services';
import * as pizzasAction from './../actions/pizzas.action';

@Injectable()
export class PizzasEffects {
  constructor(private actions$: Actions, private pizzaService: fromServices.PizzasService) { }

  @Effect()
  loadPizzas$ = this.actions$
    .ofType(pizzasAction.LOAD_PIZZAS)
    .pipe(switchMap(() => {
      return this.pizzaService.getPizzas().pipe(
        map(pizzas => new pizzasAction.LoadPizzasSuccess(pizzas)),
        catchError(error => of(new pizzasAction.LoadPizzasFail(error)))
      )
    }));

  @Effect()
  createPizza$ = this.actions$
    .ofType(pizzasAction.CREATE_PIZZAS)
    .pipe(
      map((action: pizzasAction.CreatePizza) => action.payload),
      switchMap(pizza => {
        return this.pizzaService.createPizza(pizza).pipe(
          map(pizza => new pizzasAction.CreatePizzaSuccess(pizza)),
          catchError(err => of(new pizzasAction.CreatePizzaFail(err)))
        )
      })
    )

  @Effect()
  updatePizza$ = this.actions$
    .ofType(pizzasAction.UPDATE_PIZZAS)
    .pipe(
      map((action: pizzasAction.UpdatePizza) => action.payload),
      switchMap(pizza => {
        return this.pizzaService.updatePizza(pizza).pipe(
          map(pizza => new pizzasAction.UpdatePizza(pizza)),
          catchError(error => of(new pizzasAction.UpdatePizzaFail(error)))
        )
      })
    )

  @Effect()
  removePizza$ = this.actions$
    .ofType(pizzasAction.REMOVE_PIZZAS)
    .pipe(
      map((action: pizzasAction.RemovePizza) => action.payload),
      switchMap(pizza => {
        return this.pizzaService.removePizza(pizza).pipe(
          // nothing return after deletion
          map(() => new pizzasAction.RemovePizzaSuccess(pizza)),
          catchError(error => of(new pizzasAction.RemovePizzaFail(error)))
        )
      })
    )

}