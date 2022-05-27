/* eslint-disable @typescript-eslint/member-ordering */
/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { OrganizadoresService } from '../../services/organizadores.service';
import { DomSanitizer } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { Platform } from '@ionic/angular';

import {
  Camera,
  CameraResultType,
  CameraSource,
  Photo,
} from '@capacitor/camera';
const URL: any = 'localhost:3000/organizador/uploads';
import { Filesystem } from '@capacitor/filesystem';

@Component({
  selector: 'app-organizador',
  templateUrl: './organizador.page.html',
  styleUrls: ['./organizador.page.scss'],
})
export class OrganizadorPage implements OnInit {
  public foto: any = 'https://cdn-icons-png.flaticon.com/512/4128/4128176.png';
  org_foto: string = this.foto;

  public photos: any = [
    {
      filepath: 'soon...',
      webviewPath: this.foto,
    },
  ];

  organizadorForm = this.fb.group({
    nombre: ['', Validators.required],
    cargo: ['', Validators.required],
    descripcion: [''],
    foto: ['', Validators.required],
    whatsapp: ['', Validators.required],
  });
  public codigo: string;
  // images: LocalFile[] = [];

  constructor(
    public http: HttpClient,
    private sanitizer: DomSanitizer,
    private activatedRoute: ActivatedRoute,
    private organizadorService: OrganizadoresService,
    private fb: FormBuilder,
    private router: Router,
    private platform: Platform
  ) {}

  ngOnInit() {
    this.obtenerOrganizador();
  }

  public guardarOrganizador() {
    console.log(this.foto);
    const organizador = this.organizadorForm.value;
    const tmpOrganizador = {
      org_codigo: this.codigo === '0' ? null : Number(this.codigo),
      org_nombre: organizador.nombre,
      org_cargo: organizador.cargo,
      org_descripcion: organizador.descripcion,
      org_foto: this.org_foto,
      org_whatsapp: organizador.whatsapp,
      fk_usuario: this.codigo === '0' ? null : Number(this.codigo),
    };
    console.log('org_codigo:', tmpOrganizador.org_codigo);
    console.log('fk_usuario:', tmpOrganizador.fk_usuario);
    this.organizadorService
      .guardarOrganizadorService(tmpOrganizador)
      .subscribe((data: any) => {
        //console.log(this.data);
        this.router.navigate(['/organizadores']);
      });
  }

  private async obtenerOrganizador() {
    this.codigo = this.activatedRoute.snapshot.params.id;
    //console.log('el codigo:',this.codigo);
    //caso el codigo sea distinto a 0 hace la consulta a la bd
    if (this.codigo !== '0') {
      this.organizadorService
        .obtenerOrganizador(this.codigo)
        .subscribe((data: any) => {
          if (data.success) {
            this.organizadorForm.setValue({
              nombre: data.organizador.org_nombre,
              cargo: data.organizador.org_cargo,
              descripcion: data.organizador.org_descripcion,
              foto: data.organizador.org_foto,
              whatsapp: data.organizador.org_whatsapp,
            });
            this.org_foto = data.organizador.org_foto;
            this.foto = data.organizador.org_foto;
            this.photos.unshift({
              filepath: 'soon...',
              webviewPath: data.organizador.org_foto,
            });
            console.log(data.organizador.org_foto);
          }
        });
    }
  }

  async getPicture() {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.Uri,
      source: CameraSource.Photos, // Camera, Photos or Prompt!
    });
    this.foto = image.webPath;
    this.photos.unshift({
      filepath: 'soon...',
      webviewPath: image.webPath,
    });
    //this.photo = this.sanitizer.bypassSecurityTrustResourceUrl(image && (image.dataUrl));
    console.log('image:', image);
    if (image) {
      //this.saveImage(image);
      const base64Data = await this.readAsBase64(image);
      this.org_foto = base64Data;
    }
  }

  upload(event: Event) {
    const target = event.target as HTMLInputElement;
    const files = target.files as FileList;
    console.log(files);
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
