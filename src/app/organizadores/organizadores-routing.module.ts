import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrganizadoresPage } from './organizadores.page';

const routes: Routes = [
  {
    path: '',
    component: OrganizadoresPage
  },
  {
    path: 'organizador/:id',
    loadChildren: () => import('./organizador/organizador.module').then( m => m.OrganizadorPageModule)
  },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrganizadoresPageRoutingModule {}
