import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RechazarPageRoutingModule } from './rechazar-routing.module';

import { RechazarPage } from './rechazar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RechazarPageRoutingModule
  ],
  declarations: [RechazarPage]
})
export class RechazarPageModule {}
