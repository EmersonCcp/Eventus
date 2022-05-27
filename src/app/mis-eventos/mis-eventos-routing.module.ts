import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MisEventosPage } from './mis-eventos.page';

const routes: Routes = [
  {
    path: '',
    component: MisEventosPage
  },
  {
    path: 'crear-evento/:id',
    loadChildren: () => import('./crear-evento/crear-evento.module').then( m => m.CrearEventoPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MisEventosPageRoutingModule {}
