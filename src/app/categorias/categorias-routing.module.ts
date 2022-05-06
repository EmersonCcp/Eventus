import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CategoriasPage } from './categorias.page';

const routes: Routes = [
  {
    path: '',
    component: CategoriasPage
  },
  {
    path: '/categorias/categoria/:id',
    loadChildren: () => import('./categoria/categoria.module').then( m => m.CategoriaPageModule)
  },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CategoriasPageRoutingModule {}
