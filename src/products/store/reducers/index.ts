import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';
import { ProductsState } from '../interfaces';
import * as fromPizzasReducer from '../reducers/pizzas.reducer';

export const reducers: ActionReducerMap<ProductsState> = {
  pizzas: fromPizzasReducer.reducer
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
