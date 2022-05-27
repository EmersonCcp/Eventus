import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EventosDetallePage } from './eventos-principal.page';

const routes: Routes = [
  {
    path: '',
    component: EventosDetallePage
  },
  {
    path: 'evento-detalle/:id',
    loadChildren: () => import('./evento-detalle/evento-detalle.module').then( m => m.EventoDetallePageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EventosDetallePageRoutingModule {}
