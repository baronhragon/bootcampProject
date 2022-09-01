import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InvitacionPage } from './invitacion.page';

const routes: Routes = [
  {
    path: '',
    component: InvitacionPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class InvitacionPageRoutingModule {}