import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SeleccionRestaurantePage } from './seleccion-restaurante.page';

const routes: Routes = [
  {
    path: '',
    component: SeleccionRestaurantePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SeleccionRestaurantePageRoutingModule {}
