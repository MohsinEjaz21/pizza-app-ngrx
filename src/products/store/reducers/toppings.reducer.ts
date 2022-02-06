import { Topping } from '@products/models/topping.model';
import * as fromToppings from '@products/store/actions/toppings.action';
import { ToppingState } from '../interfaces/toppings.interface';

export const initialState: ToppingState = {
  entities: {},
  loaded: false,
  loading: false
};


export function reducer(state = initialState, action: fromToppings.ToppingsAction): ToppingState {
  switch (action.type) {
    case fromToppings.LOAD_TOPPINGS: {
      return {
        ...state,
        loading: true,
        loaded: false
      }
    }
    case fromToppings.LOAD_TOPPINGS_SUCCESS: {
      const toppings = action.payload

      const entities = toppings.reduce((entities: { [id: number]: Topping }, topping: Topping) => {
        return {
          ...entities,
          [topping.id]: topping
        }
      }, { ...state.entities })

      return {
        ...state,
        loaded: true,
        loading: false,
        entities
      }
    }
    case fromToppings.LOAD_TOPPINGS_FAIL: {
      return {
        ...state,
        loaded: false,
        loading: false
      }
    }
  }

}