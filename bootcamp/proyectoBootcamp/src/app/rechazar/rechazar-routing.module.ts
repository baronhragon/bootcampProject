import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RechazarPage } from './rechazar.page';

const routes: Routes = [
  {
    path: '',
    component: RechazarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RechazarPageRoutingModule {}
