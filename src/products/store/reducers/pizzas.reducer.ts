import { Pizza } from './../../models/pizza.model';
import * as fromPizza from './../actions/pizzas.action';

export interface PizzaState {
  data: Pizza[],
  loaded: boolean,
  loading: boolean
}

export const initialState: PizzaState = {
  data: [],
  loading: false,
  loaded: false,
}

export function reducer(state = initialState, action: any): PizzaState {

  switch (action.type) {
    case fromPizza.LOAD_PIZZAS: {
      return {
        ...state,
        loading: true
      }
    }

    case fromPizza.LOAD_PIZZAS_SUCCESS: {
      console.log("LOAD_PIZZAS_SUCCESS", action.payload);
      const data = action.payload;
      return {
        ...state,
        data,
        loading: false,
        loaded: true
      }
    }

    case fromPizza.LOAD_PIZZAS_FAIL: {
      return {
        ...state,
        loaded: false,
        loading: false
      }
    }

    default: {
      return { ...state }
    }

  }
}


export const getPizzasLoading = (state: PizzaState) => state.loading;
export const getPizzasLoaded = (state: PizzaState) => state.loaded;
export const getPizzas = (state: PizzaState) => state.data;