/* eslint-disable max-len */
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
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
    path: 'registro-usuario',
    loadChildren: () => import('./registro-usuario/registro-usuario.module').then( m => m.RegistroUsuarioPageModule)
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
    path: 'eventos-principal/evento-detalle/:id',
    loadChildren: () => import('./eventos/eventos-principal/evento-detalle/evento-detalle.module').then( m => m.EventoDetallePageModule)
  },
  {
    path: 'staff',
    loadChildren: () => import('./eventos/staff/staff.module').then( m => m.StaffPageModule)
  },
  {
    path: 'perfil-usuario',
    loadChildren: () => import('./perfil-usuario/perfil-usuario.module').then( m => m.PerfilPageModule)
  },
  {
    path: 'recuperar-pass',
    loadChildren: () => import('./recuperar-pass/recuperar-pass.module').then( m => m.RecuperarPassPageModule)
  },
  {
    path: 'mis-eventos/crear-evento/:id',
    loadChildren: () => import('./mis-eventos/crear-evento/crear-evento.module').then( m => m.CrearEventoPageModule)
  },
  {
    path: 'presentacion',
    loadChildren: () => import('./presentacion/presentacion.module').then( m => m.PresentacionPageModule)
  },
  {
    path: 'mis-eventos',
    loadChildren: () => import('./mis-eventos/mis-eventos.module').then( m => m.MisEventosPageModule)
  },
  {
    path: 'organizadores',
    loadChildren: () => import('./organizadores/organizadores.module').then( m => m.OrganizadoresPageModule)
  },
  {
    path: 'categorias',
    loadChildren: () => import('./categorias/categorias.module').then( m => m.CategoriasPageModule)
  },
  {
    path: 'categorias/categoria/:id',
    loadChildren: () => import('./categorias/categoria/categoria.module').then( m => m.CategoriaPageModule)
  },
  {
    path: 'organizadores/organizador/:id',
    loadChildren: () => import('./organizadores/organizador/organizador.module').then( m => m.OrganizadorPageModule)
  },
  {
    path: 'modal-foto-edit',
    loadChildren: () => import('./modal-foto-edit/modal-foto-edit.module').then( m => m.ModalFotoEditPageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
