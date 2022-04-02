import { Component, OnInit } from '@angular/core';
import { InicioSesion } from '../interfaces/usuario.interface';

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.page.html',
  styleUrls: ['./inicio-sesion.page.scss'],
})
export class InicioSesionPage implements OnInit {

  usuario= {
    correo: '',
    password: ''
  };

  constructor() { }

  ngOnInit() {
  }

  verificarDatos(){
    console.log('form submit');
    console.log(this.usuario);
  }

}
