import { createSelector } from '@ngrx/store';
import { ProductsState } from '../interfaces';
import { ToppingState } from '../interfaces/toppings.interface';
import { getProductsState } from '../reducers';

// products > toppings
export const getToppingsState = createSelector(getProductsState, (state: ProductsState) => state.toppings)

// toppings > entities
export const getToppingEntities = createSelector(getToppingsState, (state: ToppingState) => state.entities)

// toppings > loaded
export const getLoadedToppings = createSelector(getToppingsState, (state: ToppingState) => state.loaded)

// toppings > loading
export const getLoadingToppings = createSelector(getToppingsState, (state: ToppingState) => state.loading)

// toppings > selectedToppings
export const getSelectedToppings = createSelector(getToppingsState, (state: ToppingState) => state.selectedToppings)

// Map entities to Array
export const getAllToppings = createSelector(getToppingEntities, (entities) => {
  return Object.keys(entities).map(id => entities[parseInt(id, 10)]);
})
