import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActualizarCategoriasPage } from './actualizar-categorias.page';

const routes: Routes = [
  {
    path: '',
    component: ActualizarCategoriasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActualizarCategoriasPageRoutingModule {}
