import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalInvitacionPageRoutingModule } from './modal-invitacion-routing.module';

import { ModalInvitacionPage } from './modal-invitacion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalInvitacionPageRoutingModule
  ],
  declarations: [ModalInvitacionPage]
})
export class ModalInvitacionPageModule {}
