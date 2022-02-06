import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';
import { ProductsState } from '../interfaces';
import * as fromPizzasReducer from '../reducers/pizzas.reducer';
import * as fromToppingsReducer from '../reducers/toppings.reducer';

export const reducers: ActionReducerMap<ProductsState> = {
  pizzas: fromPizzasReducer.reducer,
  toppings: fromToppingsReducer.reducer
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
