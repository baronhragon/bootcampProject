import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalInvitacionPage } from './modal-invitacion.page';

const routes: Routes = [
  {
    path: '',
    component: ModalInvitacionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalInvitacionPageRoutingModule {}
