import { Pizza } from '@products/models/pizza.model';
import * as fromPizza from '@products/store/actions/pizzas.action';
import { PizzaState } from '../interfaces';

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
      const pizzas = action.payload;
      const entities = pizzas.reduce((entities: { [id: number]: Pizza }, pizza: Pizza) => {
        return {
          ...entities,
          [pizza.id]: pizza
        }
      }, { ...state.entities })
      return {
        ...state,
        entities,
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
    case fromPizza.UPDATE_PIZZAS_SUCCESS:
    case fromPizza.CREATE_PIZZAS_SUCCESS: {
      const pizza = action.payload;
      const entities = {
        ...state.entities,
        [pizza.id]: pizza
      }
      return {
        ...state,
        entities
      }
    }

    case fromPizza.REMOVE_PIZZAS_SUCCESS: {
      const pizza = action.payload
      const { [pizza.id]: removed, ...entities } = state.entities
      return {
        ...state,
        entities
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



