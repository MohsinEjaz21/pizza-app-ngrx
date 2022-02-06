import { LoadToppings } from './../../store/actions/toppings.action';
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
        [toppings]="toppings"
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
  visualise: Pizza;
  toppings: Topping[];

  constructor(
    private store: Store<ProductsState>
  ) { }

  ngOnInit() {
    this.store.dispatch(new fromStore.LoadToppings)
    this.pizza$ = this.store.select(fromStore.getSelectedPizza)
  }

  onSelect(event: number[]) { }

  onCreate(event: Pizza) { }

  onUpdate(event: Pizza) { }

  onRemove(event: Pizza) {
  }
}
