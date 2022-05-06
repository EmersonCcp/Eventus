/* eslint-disable @typescript-eslint/member-ordering */
/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Capacitor } from '@capacitor/core';
import { FormBuilder, Validators } from '@angular/forms';
import { OrganizadoresService } from '../../services/organizadores.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { LoadingController, ModalController, Platform, ToastController } from '@ionic/angular';
import { ModalFotoEditPage } from '../../modal-foto-edit/modal-foto-edit.page';
import {
  Camera,
  CameraResultType,
  CameraSource,
  Photo,
} from '@capacitor/camera';
const URL: any = 'localhost:3000/organizador/uploads';
import { Filesystem, Directory } from '@capacitor/filesystem';
import { ViewChild } from '@angular/core';
import { ElementRef } from '@angular/core';

interface LocalFile {
  name: string;
  path: string;
  data: string;
}
const IMAGE_DIR = 'stored-images';
@Component({
  selector: 'app-organizador',
  templateUrl: './organizador.page.html',
  styleUrls: ['./organizador.page.scss'],
})
export class OrganizadorPage implements OnInit {

  isDesktop: boolean;
  public foto: any = 'https://cdn-icons-png.flaticon.com/512/4128/4128176.png';
  public archivos: any = [];
  public previsualizacion: string;
  org_foto: string;
  type: any;
  public photos: any = [
    {
      filepath: "soon...",
      webviewPath: this.foto
    }
  ];

  organizadorForm = this.fb.group({
    nombre: ['', Validators.required],
    cargo: ['', Validators.required],
    descripcion: [''],
    foto: ['', Validators.required],
    whatsapp: ['', Validators.required],
  });
  public codigo: string;
  images: LocalFile[] = [];

  constructor(
    public http: HttpClient,
    private sanitizer: DomSanitizer,
    private activatedRoute: ActivatedRoute,
    private organizadorService: OrganizadoresService,
    private fb: FormBuilder,
    private router: Router,
    private modalController: ModalController,
    private loadingCtrl: LoadingController,
    private platform: Platform
  ) {}

  ngOnInit() {
    this.obtenerOrganizador();
  }

  public guardarOrganizador() {
    //subir imagen al servidor
    /*try {
      const formularioDeDatos = new FormData();
      this.archivos.forEach((archivo: File) => {
        formularioDeDatos.append('org_foto', archivo, archivo.name);
        const nombre = archivo.name;
        this.foto = archivo.name;
        //console.log(nombre);
      });
      this.http
        .post(`http://localhost:3000/avatar`, formularioDeDatos)
        .subscribe((res) => {
          console.log('respuesta del servidor', res);
        });
    } catch (e) {
      console.log('error', e);
    }*/
    console.log(this.foto);
    //subir a la BD
    const organizador = this.organizadorForm.value;
    const tmpOrganizador = {
      org_codigo: this.codigo === '0' ? null : Number(this.codigo),
      org_nombre: organizador.nombre,
      org_cargo: organizador.cargo,
      org_descripcion: organizador.descripcion,
      org_foto: this.org_foto,
      org_whatsapp: organizador.whatsapp,
    };
    console.log(tmpOrganizador);
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
            this.photos.unshift({
              filepath: 'soon...',
              webviewPath: data.organizador.org_foto
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
        source: CameraSource.Photos // Camera, Photos or Prompt!
    });
    this.photos.unshift({
      filepath: "soon...",
      webviewPath: image.webPath
    });
    //this.photo = this.sanitizer.bypassSecurityTrustResourceUrl(image && (image.dataUrl));
    console.log('image:',image);
    if (image) {
        //this.saveImage(image);
        const base64Data = await this.readAsBase64(image);
        this.org_foto= base64Data;
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
