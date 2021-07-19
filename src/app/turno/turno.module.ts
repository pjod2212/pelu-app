import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TurnoPageRoutingModule } from './turno-routing.module';

import { TurnoPage } from './turno.page';
import { NgCalendarModule  } from 'ionic2-calendar';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TurnoPageRoutingModule,
    NgCalendarModule
  ],
  declarations: [TurnoPage]
})
export class TurnoPageModule {}
