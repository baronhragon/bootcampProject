import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AceptarPage } from './aceptar.page';

const routes: Routes = [
  {
    path: '',
    component: AceptarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AceptarPageRoutingModule {}
