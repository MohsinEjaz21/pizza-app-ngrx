import { Topping } from "@products/models/topping.model";

export interface ToppingState {
  entities: { [id: number]: Topping },
  loaded: boolean,
  loading: boolean,
  selectedToppings: number[]
}
