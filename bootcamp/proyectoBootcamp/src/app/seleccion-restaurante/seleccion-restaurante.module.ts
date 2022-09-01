import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SeleccionRestaurantePageRoutingModule } from './seleccion-restaurante-routing.module';

import { SeleccionRestaurantePage } from './seleccion-restaurante.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SeleccionRestaurantePageRoutingModule
  ],
  declarations: [SeleccionRestaurantePage]
})
export class SeleccionRestaurantePageModule {}
