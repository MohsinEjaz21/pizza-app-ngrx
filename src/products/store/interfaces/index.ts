import { Pizza } from "@products/models/pizza.model";

export interface PizzaState {
  entities: { [id: number]: Pizza },
  loaded: boolean,
  loading: boolean
}

export interface ProductsState {
  pizzas: PizzaState
}
