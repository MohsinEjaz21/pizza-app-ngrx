import { PizzaState } from './pizzas.interface';
import { ToppingState } from './toppings.interface';

export * from './pizzas.interface';

export interface ProductsState {
  pizzas: PizzaState,
  toppings: ToppingState
}
