import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistroRestaurantPageRoutingModule } from './registro-restaurant-routing.module';

import { RegistroRestaurantPage } from './registro-restaurant.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistroRestaurantPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [RegistroRestaurantPage]
})
export class RegistroRestaurantPageModule {}
