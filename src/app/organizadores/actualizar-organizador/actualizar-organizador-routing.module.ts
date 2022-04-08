import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActualizarOrganizadorPage } from './actualizar-organizador.page';

const routes: Routes = [
  {
    path: '',
    component: ActualizarOrganizadorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActualizarPageRoutingModule {}
