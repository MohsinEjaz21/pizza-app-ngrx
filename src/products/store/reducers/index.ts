import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromPizzas from './pizzas.reducer';

export interface ProductsState {
  pizzas: fromPizzas.PizzaState
}

export const reducers: ActionReducerMap<ProductsState> = {
  pizzas: fromPizzas.reducer
}

// TO understand selector see the model first as given in the snippet below

// const state = {
//   products: {
//     pizzas: {
//       data: [],
//       loading: false,
//       loaded: false
//     }
//   }
// }

// in products.module.ts have feature selector  "products" ... see the snippet above
export const getProductsState = createFeatureSelector<ProductsState>('products');

// inside products we have selector "pizzas"
export const getPizzasState = createSelector(getProductsState, (state: ProductsState) => state.pizzas)

// inside pizzas we have selector "data"
export const getAllPizzas = createSelector(getPizzasState, fromPizzas.getPizzas);

//  inside pizzas we have selector "loading"
export const getPizzasLoading = createSelector(getPizzasState, fromPizzas.getPizzasLoading);

//  inside pizzas we have selector "loaded"
export const getPizzasLoaded = createSelector(getPizzasState, fromPizzas.getPizzasLoaded);