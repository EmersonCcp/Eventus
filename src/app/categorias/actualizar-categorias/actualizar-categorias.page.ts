/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {HttpClient} from '@angular/common/http';
import { Categoria } from '../../interfaces/categoria';
import { CategoriasService } from '../../services/categorias.service';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-actualizar-categorias',
  templateUrl: './actualizar-categorias.page.html',
  styleUrls: ['./actualizar-categorias.page.scss'],
})
export class ActualizarCategoriasPage implements OnInit {
 categoria: Categoria;
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
       ca_nombre: new FormControl()
     });
    this.listarOrganizador(this.id);
  }

  listarOrganizador(ca_codigo){
    this.categoriaService.obtenerCategoriaService(this.id)
    .subscribe((res: Categoria) =>{
    //  console.log('DATA: ',res);
      this.categoria = res;
    //  this.canombre = this.categoria['ca_nombre'];
      console.log('entro en la funcino listar',this.categoria);
     console.log('el nombre: ',this.canombre);
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
