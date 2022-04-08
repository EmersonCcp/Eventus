import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ActualizarPageRoutingModule } from './actualizar-organizador-routing.module';

import { ActualizarOrganizadorPage } from './actualizar-organizador.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ActualizarPageRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  declarations: [ActualizarOrganizadorPage]
})
export class ActualizarPageModule {}
