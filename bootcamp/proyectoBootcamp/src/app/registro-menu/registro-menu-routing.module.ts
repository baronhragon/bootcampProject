import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistroMenuPage } from './registro-menu.page';

const routes: Routes = [
  {
    path: '',
    component: RegistroMenuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistroMenuPageRoutingModule {}
