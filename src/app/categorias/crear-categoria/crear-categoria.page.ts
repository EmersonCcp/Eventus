/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import {CategoriasService} from '../../services/categorias.service';

@Component({
  selector: 'app-crear-categoria',
  templateUrl: './crear-categoria.page.html',
  styleUrls: ['./crear-categoria.page.scss'],
})
export class CrearCategoriaPage implements OnInit {

  categoriaForm = this.fb.group({
    nombre: [''],
  });

  public codigo: string;

  constructor(
    public categoriaService: CategoriasService,
    public router: Router,
    public activateRoute: ActivatedRoute,
    public fb: FormBuilder) { }

  ngOnInit() {
    this.obtenerCategoria();
  }

  public async guardarCategoria(){
    const categoria = this.categoriaForm.value;
    const tmpCategoria = {
      ca_codigo: this.codigo === '0' ? null: Number(this.codigo),
      ca_nombre: categoria.nombre,
    };

    this.categoriaService.guardarCategoria(tmpCategoria).subscribe(async (data: any) => {
      const message = data.success ? 'Categoria guardada con exito' : 'Error al guardar';
      this.router.navigate(['/categorias']);
    });
  }

  public async obtenerCategoria(){
    this.codigo = this.activateRoute.snapshot.params.id;
    //caso el codigo sea distinto a 0 hace la consulta a la bd
    if(this.codigo !== '0'){
      this.categoriaService.obtenerCategoriaService(this.codigo).subscribe((data: any) => {
        if(data.success){
          this.categoriaForm.setValue({
            nombre: data.categoria.ca_nombre,
          });
        }
      });
    }
  }

}
