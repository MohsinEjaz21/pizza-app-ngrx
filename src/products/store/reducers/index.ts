import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromPizzas from './pizzas.reducer';

export interface ProductsState {
  pizzas: fromPizzas.PizzaState
}

export const reducers: ActionReducerMap<ProductsState> = {
  pizzas: fromPizzas.reducer
}

// in products.module.ts have feature selector  "products" ... see the snippet above
export const getProductsState = createFeatureSelector<ProductsState>('products');


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
