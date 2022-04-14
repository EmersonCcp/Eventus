import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  public appPages = [
    { title: 'Inicio', url: 'home', icon: 'home' },
    { title: 'Ingresar', url: 'inicio-sesion', icon: 'person-circle' },
    { title: 'Registro', url: 'registro-usuario', icon:'person-add', },
    { title: 'Mi perfil', url: 'perfil-usuario', icon: 'person-circle' },
    { title: 'Organizadores', url: 'organizadores', icon: 'people' },
    { title: 'Categorias', url: 'categorias', icon: 'bookmark' },
    { title: 'Mis eventos', url: 'mis-eventos', icon: 'albums' },
    { title: 'Configuración', url: '', icon: 'construct' }
  ];

  constructor() {}
}
