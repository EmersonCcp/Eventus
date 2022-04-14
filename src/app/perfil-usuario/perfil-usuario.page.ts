/* eslint-disable @typescript-eslint/dot-notation */
/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {UsuariosService} from '../services/usuarios.service';
import { Router, ActivatedRoute } from '@angular/router';
import {Usuario} from '../interfaces/usuario.interface';

@Component({
  selector: 'app-perfil-usuario',
  templateUrl: './perfil-usuario.page.html',
  styleUrls: ['./perfil-usuario.page.scss'],
})
export class PerfilUsuarioPage implements OnInit {

  usuario: any;

  usuNombre: any;
  usuApellido: any;
  usuFecha: any;
  usuEmail: any;

  updateUsuarioForm: FormGroup;

  constructor(public usuarioService: UsuariosService,
    private activatedRoute: ActivatedRoute,
    public formBuilder: FormBuilder,
    public router: Router) { }

  ngOnInit() {

    this.updateUsuarioForm = this.formBuilder.group({
      usu_nombre: ['',[Validators.required]],
      usu_apellido: ['',[Validators.required]],
      usu_fnac: ['',[Validators.required]],
      usu_email: ['',[Validators.required]]
     });
    this.obtenerUsuario();
  }

 ionViewWillEnter(){
    this.obtenerUsuario();
  }

  obtenerUsuario(){
    this.usuarioService.obtenerUsuarioService(2)
    .subscribe((data) => {
      this.usuario = data;
      this.usuNombre = this.usuario.usuario['usu_nombre'];
      this.usuApellido = this.usuario.usuario['usu_apellido'];
      this.usuFecha = this.usuario.usuario['usu_fnac'];
      this.usuEmail = this.usuario.usuario['usu_email'];
      console.log(this.usuario);
    });
  }

  onSubmit(){
    console.log(this.updateUsuarioForm.value);
  }

  updateForm() {
    if(this.updateUsuarioForm.value){

    }else{
      console.log('codigo id metodo update');
      this.usuarioService.actualizarUsuarioService(2, this.updateUsuarioForm.value)
        .subscribe((res) => {
          console.log('actualizado',res);
          //this.updateUsuarioForm.reset();
          //this.router.navigate(['/categorias']);
        });
    }

  }

}
