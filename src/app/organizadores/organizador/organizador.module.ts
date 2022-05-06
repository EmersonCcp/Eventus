import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OrganizadorPageRoutingModule } from './organizador-routing.module';

import { OrganizadorPage } from './organizador.page';
import { ToastrModule } from 'ngx-toastr';
import { FileUploadModule } from 'ng2-file-upload';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,ReactiveFormsModule,
    OrganizadorPageRoutingModule,
    ToastrModule.forRoot(),
    FileUploadModule
  ],
  declarations: [OrganizadorPage]
})
export class OrganizadorPageModule {}
