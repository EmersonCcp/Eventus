/* eslint-disable @typescript-eslint/member-ordering */
/* eslint-disable @typescript-eslint/dot-notation */
/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UsuariosService } from '../services/usuarios.service';
import { DomSanitizer } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { Platform, ToastController } from '@ionic/angular';
import { Filesystem } from '@capacitor/filesystem';
import { Router } from '@angular/router';

import {
  Camera,
  CameraResultType,
  CameraSource,
  Photo,
} from '@capacitor/camera';

@Component({
  selector: 'app-perfil-usuario',
  templateUrl: './perfil-usuario.page.html',
  styleUrls: ['./perfil-usuario.page.scss'],
})
export class PerfilUsuarioPage implements OnInit {
  foto: any = 'https://cdn-icons-png.flaticon.com/512/4128/4128176.png';

  usu_avatar: string;
  usu_codigo: string;

  updateUsuarioForm = this.fb.group({
    usu_nombre: ['', Validators.required],
    usu_apellido: ['', Validators.required],
    usu_fnac: ['', Validators.required],
    usu_avatar: ['', Validators.required],
  });

  constructor(
    public usuarioService: UsuariosService,
    public http: HttpClient,
    private sanitizer: DomSanitizer,
    private fb: FormBuilder,
    private platform: Platform,
    private router: Router,
    public toastController: ToastController
  ) {}

  ngOnInit() {
    this.obtenerUsuario();
  }


  public obtenerUsuario() {
    this.usu_codigo = '1';
    this.usuarioService
      .obtenerUsuarioService('1').subscribe((data: any) => {
        if (data.success) {
          this.updateUsuarioForm.setValue({
            usu_nombre: data.usuario.usu_nombre,
            usu_apellido: data.usuario.usu_apellido,
            usu_fnac: data.usuario.usu_fnac,
            usu_avatar: data.usuario.usu_avatar,
          });
          this.foto = data.usuario.usu_avatar;
        }
      });
  }

  /* onSubmit(){
    console.log(this.updateUsuarioForm.value);
  }*/

  updateForm() {
    const usuario = this.updateUsuarioForm.value;
    const tmpUsuario = {
      usu_codigo: 1,
      usu_nombre: usuario.usu_nombre,
      usu_apellido: usuario.usu_apellido,
      usu_fnac: usuario.usu_fnac,
      usu_avatar: this.foto,
    };
    this.usuarioService.actualizarUsuarioService(tmpUsuario)
    .subscribe((data: any) => {
      console.log(data);
    });
    this.datosModificados();
    //this.router.navigate(['/perfil-usuario']);
  }

  async datosModificados() {
    const toast = await this.toastController.create({
      message: 'Datos modificados con exito!',
      duration: 2000,
      color: 'tertiary'
    });
    toast.present();
  }

  cerrarSesion() {
    this.router.navigate(['/home']);
    const usuario = this.updateUsuarioForm.value;
    const tmpUsuario = {
      usu_codigo: 1,
      usu_nombre: usuario.usu_nombre,
      usu_apellido: usuario.usu_apellido,
      usu_fnac: usuario.usu_fnac,
      usu_avatar: this.foto,
    };
    console.log(tmpUsuario);
  }


  async getPicture() {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.Uri,
      source: CameraSource.Photos, // Camera, Photos or Prompt!
    });
    this.foto = image.webPath;

    console.log('image:', image);
    if (image) {
      //this.saveImage(image);
      const base64Data = await this.readAsBase64(image);
      this.foto = base64Data;
    }
  }

  private async readAsBase64(photo: Photo) {
    if (this.platform.is('hybrid')) {
      const file = await Filesystem.readFile({
        path: photo.path,
      });

      return file.data;
    } else {
      // Fetch the photo, read as a blob, then convert to base64 format
      const response = await fetch(photo.webPath);
      const blob = await response.blob();

      return (await this.convertBlobToBase64(blob)) as string;
    }
  }

  convertBlobToBase64 = (blob: Blob) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onerror = reject;
      reader.onload = () => {
        resolve(reader.result);
      };
      reader.readAsDataURL(blob);
    });

  //imagen
  extraerBase64 = async ($event: any) =>
    new Promise((resolve, reject) => {
      try {
        const unsafeImg = window.URL.createObjectURL($event);
        const image = this.sanitizer.bypassSecurityTrustUrl(unsafeImg);
        const reader = new FileReader();
        reader.readAsDataURL($event);
        reader.onload = () => {
          resolve({
            base: reader.result,
          });
        };
        reader.onerror = (error) => {
          resolve({
            base: null,
          });
        };
      } catch (e) {
        return null;
      }
    });
}
