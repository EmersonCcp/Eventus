import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ActualizarCategoriasPageRoutingModule } from './actualizar-categorias-routing.module';

import { ActualizarCategoriasPage } from './actualizar-categorias.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    ActualizarCategoriasPageRoutingModule
  ],
  declarations: [ActualizarCategoriasPage]
})
export class ActualizarCategoriasPageModule {}
