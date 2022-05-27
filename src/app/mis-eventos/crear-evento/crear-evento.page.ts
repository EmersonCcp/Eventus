/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnInit } from '@angular/core';
import { CategoriasService } from '../../services/categorias.service';
import { FormBuilder, Validators } from '@angular/forms';
import { EventosService } from '../../services/eventos.service';
import { Router, ActivatedRoute } from '@angular/router';
import { DomSanitizer} from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { Platform } from '@ionic/angular';
import { Filesystem} from '@capacitor/filesystem';
import {Camera, CameraResultType,CameraSource,Photo,} from '@capacitor/camera';



@Component({
  selector: 'app-crear-evento',
  templateUrl: './crear-evento.page.html',
  styleUrls: ['./crear-evento.page.scss'],
})
export class CrearEventoPage implements OnInit {

  public foto: any = 'https://pits-agroforestal.net/wp-content/themes/merlin/images/default-slider-image.png';
  public photos: any = [
    {
      filepath: 'soon...',
      webviewPath: this.foto
    }
  ];
  categoriaSelected: string;
  eve_foto: string;
  categorias = null;
  public codigo: string;

  eventoForm = this.fb.group({
    nombre: ['', Validators.required],
    descripcion: ['', Validators.required],
    fecha: ['', Validators.required],
    ubicacion: ['', Validators.required],
    categoria: ['', Validators.required],
    entradas: ['', Validators.required],
    estado: ['', Validators.required],
    img: ['', Validators.required]
  });

  constructor(
    public categoriaService: CategoriasService,
    private fb: FormBuilder,
    private eventoService: EventosService,
    private sanitizer: DomSanitizer,
    private platform: Platform,
    private activatedRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.obtenerEvento();
  }
  ionViewWillEnter(){
    this.listarCategorias();

  }


  listarCategorias(){
    this.categoriaService.listarCategoriasService()
    .subscribe((data) => {
      console.log(data);
      this.categorias = data.categorias;
    });
   }

   guardarEvento(){
    const evento = this.eventoForm.value;
    const tmpEvento = {
      eve_codigo: this.codigo === '0' ? null: Number(this.codigo),
      eve_nombre: evento.nombre,
      eve_descripcion: evento.descripcion,
      eve_fecha: evento.fecha,
      eve_ubicacion: evento.ubicacion,
      eve_categoria: evento.categoria,
      eve_entradas: evento.entradas,
      eve_estado: evento.estado,
      eve_img: this.eve_foto,
      fk_usuario: this.codigo === '0' ? null: Number(this.codigo)
    };
    //console.log(tmpEvento);
    console.log('eve_codigo:',tmpEvento.eve_codigo);
    console.log('fk_usuario:',tmpEvento.fk_usuario);
    this.eventoService
    .guardarEvento(tmpEvento)
    .subscribe( (data: any) => {
      console.log(data);
      this.router.navigate(['/mis-eventos']);
    });
   }

   async getPicture() {
    const image = await Camera.getPhoto({
        quality: 90,
        allowEditing: false,
        resultType: CameraResultType.Uri,
        source: CameraSource.Photos // Camera, Photos or Prompt!
    });
    this.foto = image.webPath;
   /* this.photos.unshift({
      filepath: 'soon...',
      webviewPath: image.webPath
    });*/
    //this.photo = this.sanitizer.bypassSecurityTrustResourceUrl(image && (image.dataUrl));
    console.log('image:',image);
    if (image) {
        //this.saveImage(image);
        const base64Data = await this.readAsBase64(image);
        this.eve_foto= base64Data;
    }

  }

   //base64
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

  private async obtenerEvento() {
    this.codigo = this.activatedRoute.snapshot.params.id;

    if (this.codigo !== '0') {
      this.eventoService
        .obtenerEvento(this.codigo)
        .subscribe((data: any) => {
          if (data.success) {
            this.eventoForm.setValue({
              nombre: data.evento.eve_nombre,
              descripcion: data.evento.eve_descripcion,
              fecha: data.evento.eve_fecha,
              ubicacion: data.evento.eve_ubicacion,
              categoria: data.evento.eve_categoria,
              entradas: data.evento.eve_entradas,
              estado: data.evento.eve_estado,
              img: data.evento.eve_img,
            });
            this.categoriaSelected = data.evento.eve_categoria;
            console.log(data.evento.eve_categoria);
            this.foto = data.evento.eve_img;
            //console.log(this.foto);
          }
        });
    }
  }

}
