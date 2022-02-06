import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Pizza } from '@products/models/pizza.model';
import { Topping } from '@products/models/topping.model';
import * as fromStore from '@products/store';
import { ProductsState } from '@products/store/interfaces';
import { Observable } from 'rxjs';



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
          [pizza]="visualise">
        </pizza-display>
      </pizza-form>
    </div>
  `,
})
export class ProductItemComponent implements OnInit {
  pizza$: Observable<Pizza>;
  toppings$: Observable<Topping[]>;
  visualise: Pizza;

  constructor(
    private store: Store<ProductsState>
  ) { }

  ngOnInit() {
    this.store.dispatch(new fromStore.LoadToppings)
    this.pizza$ = this.store.select(fromStore.getSelectedPizza)
    this.toppings$ = this.store.select(fromStore.getAllPizzas)
  }

  onSelect(event: number[]) { }

  onCreate(event: Pizza) { }

  onUpdate(event: Pizza) { }

  onRemove(event: Pizza) {
  }
}
