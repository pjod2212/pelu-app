import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PeluqueroPageRoutingModule } from './peluquero-routing.module';

import { PeluqueroPage } from './peluquero.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PeluqueroPageRoutingModule
  ],
  declarations: [PeluqueroPage]
})
export class PeluqueroPageModule {}
