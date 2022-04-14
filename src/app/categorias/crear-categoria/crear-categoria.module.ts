import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, Validators, FormsModule,FormGroup, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrearCategoriaPageRoutingModule } from './crear-categoria-routing.module';

import { CrearCategoriaPage } from './crear-categoria.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,Validators,FormBuilder,FormGroup,ReactiveFormsModule,
    CrearCategoriaPageRoutingModule
  ],
  declarations: [CrearCategoriaPage]
})
export class CrearCategoriaPageModule {}
