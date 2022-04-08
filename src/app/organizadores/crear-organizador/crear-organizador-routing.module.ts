import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrearOrganizadorPage } from './crear-organizador.page';

const routes: Routes = [
  {
    path: '',
    component: CrearOrganizadorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CrearOrganizadorPageRoutingModule {}
