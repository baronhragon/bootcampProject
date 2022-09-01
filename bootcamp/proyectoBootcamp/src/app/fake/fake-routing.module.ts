import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FakePage } from './fake.page';

const routes: Routes = [
  {
    path: '',
    component: FakePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FakePageRoutingModule {}
