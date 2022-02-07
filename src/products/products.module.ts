import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
// components
import * as fromComponents from '@products/components';
// containers
import * as fromContainers from '@products/containers';
import * as fromGaurds from '@products/gaurds';
// services
import * as fromServices from '@products/services';
import * as fromStore from '@products/store';




// routes
export const ROUTES: Routes = [
  {
    path: '',
    component: fromContainers.ProductsComponent,
    canActivate: [fromGaurds.PizzasGaurd]
  },
  {
    path: 'new',
    canActivate: [fromGaurds.PizzasGaurd, fromGaurds.ToppingsGaurd],
    component: fromContainers.ProductItemComponent,
  },
  {
    path: ':pizzaId',
    canActivate: [fromGaurds.PizzaExistsGaurds, fromGaurds.ToppingsGaurd],
    component: fromContainers.ProductItemComponent,
  }
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    StoreModule.forFeature('products', fromStore.reducers),
    EffectsModule.forFeature(fromStore.effects),
    RouterModule.forChild(ROUTES),
  ],
  providers: [...fromServices.services, fromGaurds.gaurds],
  declarations: [...fromContainers.containers, ...fromComponents.components],
  exports: [...fromContainers.containers, ...fromComponents.components],
})
export class ProductsModule { }
