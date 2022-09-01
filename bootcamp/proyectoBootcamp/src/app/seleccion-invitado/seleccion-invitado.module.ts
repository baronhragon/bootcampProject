import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SeleccionInvitadoPageRoutingModule } from './seleccion-invitado-routing.module';

import { SeleccionInvitadoPage } from './seleccion-invitado.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SeleccionInvitadoPageRoutingModule
  ],
  declarations: [SeleccionInvitadoPage]
})
export class SeleccionInvitadoPageModule {}
