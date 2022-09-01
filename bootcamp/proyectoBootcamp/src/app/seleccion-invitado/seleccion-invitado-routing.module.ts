import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SeleccionInvitadoPage } from './seleccion-invitado.page';

const routes: Routes = [
  {
    path: '',
    component: SeleccionInvitadoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SeleccionInvitadoPageRoutingModule {}
