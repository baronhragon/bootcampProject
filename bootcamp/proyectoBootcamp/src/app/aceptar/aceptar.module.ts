import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AceptarPageRoutingModule } from './aceptar-routing.module';

import { AceptarPage } from './aceptar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AceptarPageRoutingModule
  ],
  declarations: [AceptarPage]
})
export class AceptarPageModule {}
