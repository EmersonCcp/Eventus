import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrganizadoresPage } from './organizadores.page';

const routes: Routes = [
  {
    path: '',
    component: OrganizadoresPage
  },
  {
    path: 'crear',
    loadChildren: () => import('./crear-organizador/crear-organizador.module').then( m => m.CrearPageModule)
  },
  {
    path: 'actualizar',
    loadChildren: () => import('./actualizar-organizador/actualizar-organizador.module').then( m => m.ActualizarPageModule)
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrganizadoresPageRoutingModule {}
