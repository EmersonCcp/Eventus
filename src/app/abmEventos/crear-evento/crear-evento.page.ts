/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnInit } from '@angular/core';
import { CategoriasService } from '../../services/categorias.service';
import { FormBuilder, Validators } from '@angular/forms';
import { EventosService } from '../../services/eventos.service';


@Component({
  selector: 'app-crear-evento',
  templateUrl: './crear-evento.page.html',
  styleUrls: ['./crear-evento.page.scss'],
})
export class CrearEventoPage implements OnInit {

  categorias = null;
  catSelected: any;
  public codigo: string;
  condicion: boolean;

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

  constructor(public categoriaService: CategoriasService,
    private fb: FormBuilder,
    private eventoService: EventosService) { }

  ngOnInit() {

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
      fk_categoria: evento.categoria,
      eve_entradas: evento.entradas,
      eve_estado: evento.estado,
      eve_img: null,
    };
    console.log(tmpEvento);
    this.eventoService.guardarEvento(tmpEvento).subscribe( (data: any) => {
      console.log(data);
      //this.router.navigate(['/organizadores']);
    });
   }
}
