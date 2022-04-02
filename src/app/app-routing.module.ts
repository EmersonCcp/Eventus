import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'inicio-sesion',
    loadChildren: () => import('./inicio-sesion/inicio-sesion.module').then( m => m.InicioSesionPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'eventos-principal',
    loadChildren: () => import('./eventos/eventos-principal/eventos-principal.module').then( m => m.EventosDetallePageModule)
  },
  {
    path: 'buscar-eventos',
    loadChildren: () => import('./eventos/buscar-eventos/buscar-eventos.module').then( m => m.BuscarEventosPageModule)
  },
  {
    path: 'evento-detalle',
    loadChildren: () => import('./eventos/evento-detalle/evento-detalle.module').then( m => m.EventoDetallePageModule)
  },
  {
    path: 'staff',
    loadChildren: () => import('./eventos/staff/staff.module').then( m => m.StaffPageModule)
  },
  {
    path: 'perfil',
    loadChildren: () => import('./perfil/perfil.module').then( m => m.PerfilPageModule)
  },
  {
    path: 'recuperar-pass',
    loadChildren: () => import('./recuperar-pass/recuperar-pass.module').then( m => m.RecuperarPassPageModule)
  },
  {
    path: 'crear-evento',
    loadChildren: () => import('./abmEventos/crear-evento/crear-evento.module').then( m => m.CrearEventoPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
