import { Pizza } from './../../models/pizza.model';
import * as fromPizza from './../actions/pizzas.action';

export interface PizzaState {
  entities: { [id: number]: Pizza },
  loaded: boolean,
  loading: boolean
}

export const initialState: PizzaState = {
  entities: {},
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
      const pizzas = action.payload;  // [{id: 1, name: "Pizza1"}, {id: 2, name: "Pizza2"}]
      const entities = pizzas.reduce((entities: { [id: number]: Pizza }, pizza: Pizza) => {
        return { ...entities, [pizza.id]: pizza }
      }, { ...state.entities })
      return { ...state, entities, loading: false, loaded: true }
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



      // [{ id: 1 }, { id: 2 }]
      // const pizza: any = {
      //   1: {
      //     id: 1,
      //     name: "Pizza 1",
      //     toppings: []
      //   }
      // }
      // pizza [1]



