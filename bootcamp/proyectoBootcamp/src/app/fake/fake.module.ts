import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule  } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { FakePageRoutingModule } from './fake-routing.module';

import { FakePage } from './fake.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FakePageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [FakePage]
})
export class FakePageModule {}
