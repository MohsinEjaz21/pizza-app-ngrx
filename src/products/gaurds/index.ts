import { PizzaExistsGaurds } from './pizza-exists.gaurd';
import { PizzasGaurd } from './pizza.gaurd';
import { ToppingsGaurd } from './toppings.gaurd';

export const gaurds: any[] = [PizzasGaurd, PizzaExistsGaurds, ToppingsGaurd];

export * from './pizza-exists.gaurd';
export * from './pizza.gaurd';
export * from './toppings.gaurd';

