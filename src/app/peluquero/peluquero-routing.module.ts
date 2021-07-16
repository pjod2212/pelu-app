import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PeluqueroPage } from './peluquero.page';

const routes: Routes = [
  {
    path: '',
    component: PeluqueroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PeluqueroPageRoutingModule {}
