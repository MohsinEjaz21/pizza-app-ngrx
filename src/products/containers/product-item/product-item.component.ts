import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Pizza } from '@products/models/pizza.model';
import { Topping } from '@products/models/topping.model';
import * as fromStore from '@products/store';
import { ProductsState } from '@products/store/interfaces';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';



@Component({
  selector: 'product-item',
  styleUrls: ['product-item.component.scss'],
  template: `
    <div 
      class="product-item">
      <pizza-form
        [pizza]="pizza$ | async"
        [toppings]="toppings$ | async"
        (selected)="onSelect($event)"
        (create)="onCreate($event)"
        (update)="onUpdate($event)"
        (remove)="onRemove($event)">
        <pizza-display
          [pizza]="visualise$ | async">
        </pizza-display>
      </pizza-form>
    </div>
  `,
})
export class ProductItemComponent implements OnInit {
  pizza$: Observable<Pizza>;
  toppings$: Observable<Topping[]>;
  visualise$: Observable<Pizza>;

  constructor(
    private store: Store<ProductsState>
  ) { }

  ngOnInit() {
    this.pizza$ = this.store.select(fromStore.getSelectedPizza).pipe(
      tap((pizza: Pizza = null) => {
        const pizzaExists = !!(pizza && pizza.toppings)
        const toppings = pizzaExists ? pizza.toppings.map(topping => topping.id) : []
        this.store.dispatch(new fromStore.VisualiseToppings(toppings))
      })
    )
    this.toppings$ = this.store.select(fromStore.getAllToppings)
    this.visualise$ = this.store.select(fromStore.getPizzaVisualised)
  }

  onSelect(event: number[]) {
    console.log("onSelect :: ", event);
    this.store.dispatch(new fromStore.VisualiseToppings(event))
  }

  onCreate(event: Pizza) { }

  onUpdate(event: Pizza) { }

  onRemove(event: Pizza) {
  }
}
