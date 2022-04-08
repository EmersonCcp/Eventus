import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CategoriasPage } from './categorias.page';

const routes: Routes = [
  {
    path: '',
    component: CategoriasPage
  },
  {
    path: 'crear-categoria',
    loadChildren: () => import('./crear-categoria/crear-categoria.module').then( m => m.CrearCategoriaPageModule)
  },
  {
    path: 'actualizar-categorias',
    loadChildren: () => import('./actualizar-categorias/actualizar-categorias.module').then( m => m.ActualizarCategoriasPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CategoriasPageRoutingModule {}
