/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnInit } from '@angular/core';
import { InicioSesion } from '../interfaces/usuario.interface';
import { FormBuilder, Validators } from '@angular/forms';
import { UsuariosService } from '../services/usuarios.service';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.page.html',
  styleUrls: ['./inicio-sesion.page.scss'],
})
export class InicioSesionPage implements OnInit {

  usuarioSesionForm = this.fb.group({
    usu_email: ['', Validators.required],
    usu_password: ['', Validators.required]
  });

  constructor(
    private fb: FormBuilder,
    private usuarioService: UsuariosService,
    public toastController: ToastController,
    private router: Router) { }

  ngOnInit() {
  }

  iniciarSesionForm() {
    const usuario = this.usuarioSesionForm.value;
    const tmpUsuario = {
      usu_email: usuario.usu_email,
      usu_password: usuario.usu_password,
    };
    this.usuarioService.loginUsuarioService(tmpUsuario)
    .subscribe((data: any) => {
      if(!data.success){
        this.datosInvalidos();
        console.log(data);
      }else{
        this.datosValidos();
        this.router.navigate(['/eventos-principal']);
      }
    });
  }

  async datosInvalidos() {
    const toast = await this.toastController.create({
      message: 'Correo o password inválidos!',
      duration: 2000,
      color: 'danger'
    });
    toast.present();
  }

  async datosValidos() {
    const toast = await this.toastController.create({
      message: 'Bienvenido a Eventus!',
      duration: 4000,
      color: 'success'
    });
    toast.present();
  }


}
