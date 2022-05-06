import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CategoriaPage } from './categoria.page';

const routes: Routes = [
  {
    path: '',
    component: CategoriaPage
  },
  {
    path: 'categoria/:id',
    loadChildren: () => import('./categoria.module').then( m => m.CategoriaPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CategoriaPageRoutingModule {}
