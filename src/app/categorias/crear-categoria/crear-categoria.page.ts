/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {CategoriasService} from '../../services/categorias.service';

@Component({
  selector: 'app-crear-categoria',
  templateUrl: './crear-categoria.page.html',
  styleUrls: ['./crear-categoria.page.scss'],
})
export class CrearCategoriaPage implements OnInit {

  categoria = {
    ca_codigo: null,
    ca_nombre: ''
  };

  constructor(public categoriaService: CategoriasService,
    public router: Router) { }

  ngOnInit() {
  }

  crearCategoria(){
    this.categoriaService.crearCategoriaService(this.categoria);
    this.router.navigate(['/categorias']);
    console.log(this.categoria);
  }

}
