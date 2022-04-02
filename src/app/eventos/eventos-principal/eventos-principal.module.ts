import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EventosDetallePageRoutingModule } from './eventos-principal-routing.module';

import { EventosDetallePage } from './eventos-principal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EventosDetallePageRoutingModule
  ],
  declarations: [EventosDetallePage]
})
export class EventosDetallePageModule {}
