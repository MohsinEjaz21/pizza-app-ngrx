import { Action } from "@ngrx/store";
import { Pizza } from "@products/models/pizza.model";

export const LOAD_PIZZAS = '[Products] Load Pizzas';
export const LOAD_PIZZAS_FAIL = '[Products] Load Pizzas Fail';
export const LOAD_PIZZAS_SUCCESS = '[Products] Load Pizzas Success';

export class LoadPizzas implements Action {
  readonly type = LOAD_PIZZAS;
}

export class LoadPizzasFail implements Action {
  readonly type = LOAD_PIZZAS_FAIL;
  constructor(public payload: any) { }
}

export class LoadPizzasSuccess implements Action {
  readonly type = LOAD_PIZZAS_SUCCESS;
  constructor(public payload: Pizza[]) { }
}


// Create Pizza

export const CREATE_PIZZAS = '[Products] Create Pizzas';
export const CREATE_PIZZAS_FAIL = '[Products] Create Pizzas Fail';
export const CREATE_PIZZAS_SUCCESS = '[Products] Create Pizzas Success';

export class CreatePizza implements Action {
  readonly type = CREATE_PIZZAS;
  constructor(public payload: Pizza) { }
}

export class CreatePizzaSuccess implements Action {
  readonly type = CREATE_PIZZAS_SUCCESS;
  constructor(public payload: Pizza) { }
}

export class CreatePizzaFail implements Action {
  readonly type = CREATE_PIZZAS_FAIL;
  constructor(public payload: any) { }
}

// update pizza


export const UPDATE_PIZZAS = '[Products] Update Pizzas';
export const UPDATE_PIZZAS_FAIL = '[Products] Update Pizzas Fail';
export const UPDATE_PIZZAS_SUCCESS = '[Products] Update Pizzas Success';

export class UpdatePizza implements Action {
  readonly type = UPDATE_PIZZAS;
  constructor(public payload: Pizza) { }
}

export class UpdatePizzaSuccess implements Action {
  readonly type = UPDATE_PIZZAS_SUCCESS;
  constructor(public payload: Pizza) { }
}

export class UpdatePizzaFail implements Action {
  readonly type = UPDATE_PIZZAS_FAIL;
  constructor(public payload: any) { }
}

// remove pizza


export const REMOVE_PIZZAS = '[Products] Remove Pizzas';
export const REMOVE_PIZZAS_FAIL = '[Products] Remove Pizzas Fail';
export const REMOVE_PIZZAS_SUCCESS = '[Products] Remove Pizzas Success';

export class RemovePizza implements Action {
  readonly type = REMOVE_PIZZAS;
  constructor(public payload: Pizza) { }
}

export class RemovePizzaFail implements Action {
  readonly type = REMOVE_PIZZAS_FAIL
  constructor(public payload: any) { }
}

export class RemovePizzaSuccess implements Action {
  readonly type = REMOVE_PIZZAS_SUCCESS
  constructor(public payload: Pizza) { }
}

export type PizzasAction = (
  LoadPizzas
  | LoadPizzasFail
  | LoadPizzasSuccess
  | CreatePizza
  | CreatePizzaFail
  | CreatePizzaSuccess
  | UpdatePizza
  | UpdatePizzaFail
  | UpdatePizzaSuccess
  | RemovePizza
  | RemovePizzaFail
  | RemovePizzaSuccess
)