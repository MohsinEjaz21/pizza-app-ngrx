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
}