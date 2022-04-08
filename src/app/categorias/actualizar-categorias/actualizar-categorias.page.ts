/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {HttpClient} from '@angular/common/http';
import { Categoria } from '../../interfaces/categoria';
import { CategoriasService } from '../../services/categorias.service';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-actualizar-categorias',
  templateUrl: './actualizar-categorias.page.html',
  styleUrls: ['./actualizar-categorias.page.scss'],
})
export class ActualizarCategoriasPage implements OnInit {

  id: any;
  cat: any;

  canombre: any;
  updateCategoriaForm: FormGroup;


  constructor(
    private activatedRoute: ActivatedRoute,
    private categoriaService: CategoriasService,
    public formBuilder: FormBuilder,
    public router: Router) {
      this.id = this.activatedRoute.snapshot.paramMap.get('ca_codigo');
    }

  ngOnInit() {
    console.log('el ide:',this.id);
    this.updateCategoriaForm = this.formBuilder.group({
      ca_nombre: ['']
     });
    this.listarOrganizador(this.id);
  }

  listarOrganizador(ca_codigo){
    this.categoriaService.obtenerCategoriaService(this.id)
    .subscribe(res =>{
    //  console.log('DATA: ',res);
      this.cat = res;
      this.canombre= this.cat.categoria["ca_nombre"];
     // console.log(this.cat.categoria);
    });
  }

  onSubmit(){
    console.log(this.updateCategoriaForm.value);
  }

  updateForm() {
    console.log('codigo id metodo update', this.id);
      this.categoriaService.actualizarCategoriaService(this.id, this.updateCategoriaForm.value)
        .subscribe((res) => {
          console.log('actualizado',res);
          this.updateCategoriaForm.reset();
          this.router.navigate(['/categorias']);
        });
  }

}
