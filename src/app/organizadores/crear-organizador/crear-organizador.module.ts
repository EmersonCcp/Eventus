import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrearOrganizadorPageRoutingModule } from './crear-organizador-routing.module';

import { CrearOrganizadorPage } from './crear-organizador.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CrearOrganizadorPageRoutingModule
  ],
  declarations: [CrearOrganizadorPage]
})
export class CrearPageModule {}
