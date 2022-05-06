import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalFotoEditPageRoutingModule } from './modal-foto-edit-routing.module';

import { ModalFotoEditPage } from './modal-foto-edit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalFotoEditPageRoutingModule
  ],
  declarations: [ModalFotoEditPage]
})
export class ModalFotoEditPageModule {}
