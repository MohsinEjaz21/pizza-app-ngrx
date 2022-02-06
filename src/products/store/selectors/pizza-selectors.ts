import * as fromRoot from '@app/store';
import { createSelector } from "@ngrx/store";
import { Pizza } from "@products/models/pizza.model";
import { PizzaState, ProductsState } from "../interfaces";
import { getProductsState } from '../reducers';

// module "/Users/ibmislamabad/Desktop/Vscode/Angular/UltimateCourse/ngrx-store-effects-app/src/app/store/index"


// inside products we have selector "pizzas"
export const getPizzasState = createSelector(getProductsState, (state: ProductsState) => state.pizzas)

// inside pizzas we have selector "data"
export const getPizzasEntities = createSelector(getPizzasState, (state: PizzaState) => state.entities);

export const getSelectedPizza = createSelector(
  getPizzasEntities,
  fromRoot.getRouterState,
  (entities, router): Pizza => {
    return router.state && entities[router.state.params.pizzaId]
  }
)

//  inside pizzas we have selector "loading"
export const getPizzasLoading = createSelector(getPizzasState, (state: PizzaState) => state.loading);

//  inside pizzas we have selector "loaded"
export const getPizzasLoaded = createSelector(getPizzasState, (state: PizzaState) => state.loaded);

export const getAllPizzas = createSelector(
  getPizzasEntities, (entities) => {
    return Object.keys(entities).map(id => entities[parseInt(id, 10)]);
  }
)
