/* eslint-disable eqeqeq */
import { Component, OnInit } from '@angular/core';
import {UsuariosService } from '../services/usuarios.service';
import {ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro-usuario.page.html',
  styleUrls: ['./registro-usuario.page.scss'],
})
export class RegistroPage implements OnInit {

  usuario = {
    usu_nombre: '',
    usu_apellido: '',
    usu_email: '',
    usu_password: '',
    usu_confpass: '',
    usu_fnac: ''
  };

  constructor(
    private usuarioService:  UsuariosService,
    public toastController: ToastController,
    private router: Router) { }

  ngOnInit() {

  }

  registrarUsuario(){

    if(this.usuario.usu_nombre == '' || this.usuario.usu_apellido == '' || this.usuario.usu_email == ''
    || this.usuario.usu_fnac == '' || this.usuario.usu_password == ''){
      this.completarTodosLosCampos();
    }else{
      if((this.usuario.usu_password) == (this.usuario.usu_confpass)){
      console.log('son iguales');
      this.usuarioService.crearUsuario(this.usuario);
      this.registroExistoso();
      this.router.navigate(['/inicio-sesion']);
    }else{
      console.log(this.usuario);
      this.passwordInvalido();
    }
    }

    //this.usuarioService.crearUsuario(this.usuario);
  }

  async passwordInvalido() {
    const toast = await this.toastController.create({
      message: 'Las contraseñas no coinciden!',
      duration: 2000,
      color: 'danger'
    });
    toast.present();
  }
  async registroExistoso() {
    const toast = await this.toastController.create({
      message: 'Registro Exitoso!',
      duration: 2000,
      color: 'success'
    });
    toast.present();
  }
  async completarTodosLosCampos() {
    const toast = await this.toastController.create({
      message: 'Debe completar todos los campos!',
      duration: 2000,
      color: 'warning'
    });
    toast.present();
  }

}



