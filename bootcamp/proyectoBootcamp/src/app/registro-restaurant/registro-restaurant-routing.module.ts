import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistroRestaurantPage } from './registro-restaurant.page';

const routes: Routes = [
  {
    path: '',
    component: RegistroRestaurantPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistroRestaurantPageRoutingModule {}
