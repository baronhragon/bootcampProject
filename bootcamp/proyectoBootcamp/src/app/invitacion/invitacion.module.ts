import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InvitacionPageRoutingModule } from './invitacion-routing.module';

import { InvitacionPage } from './invitacion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InvitacionPageRoutingModule
  ],
  declarations: [InvitacionPage]
})
export class InvitacionPageModule {}
