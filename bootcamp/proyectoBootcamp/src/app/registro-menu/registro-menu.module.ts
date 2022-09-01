import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistroMenuPageRoutingModule } from './registro-menu-routing.module';

import { RegistroMenuPage } from './registro-menu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistroMenuPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [RegistroMenuPage]
})
export class RegistroMenuPageModule {}
