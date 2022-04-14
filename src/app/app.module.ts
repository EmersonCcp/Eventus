import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CommonModule } from '@angular/common';
import {OrganizadoresService} from '../app/services/organizadores.service';
import {CategoriasService} from '../app/services/categorias.service';
import {HttpClientModule} from '@angular/common/http';
import { ObjToArrayPipe } from './objToArray.pipe';
import { NavController, NavParams } from '@ionic/angular';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';

@NgModule({
  declarations: [AppComponent, ObjToArrayPipe],
  entryComponents: [],
  imports: [BrowserModule,
     IonicModule.forRoot(),
      AppRoutingModule,
      CommonModule,
      HttpClientModule,
      ReactiveFormsModule,
    FormsModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    OrganizadoresService,CategoriasService,NavController,NavParams],
  bootstrap: [AppComponent],
})
export class AppModule {}
