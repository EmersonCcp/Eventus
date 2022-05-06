import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { CategoriasService } from '../../services/categorias.service';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.page.html',
  styleUrls: ['./categoria.page.scss'],
})
export class CategoriaPage implements OnInit {

  categoriaForm = this.fb.group({
    nombre: ['', Validators.required],
  });

  public codigo: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private categoriaService: CategoriasService,
    private fb: FormBuilder,
    private router: Router,
    ) { }

  ngOnInit() {
    this.obtenerCategoria();
  }

  public  guardarCategoria(){
    const categoria = this.categoriaForm.value;
    const tmpCategoria = {
      ca_codigo: this.codigo === '0' ? null: Number(this.codigo),
      ca_nombre: categoria.nombre,
    };
    this.categoriaService.guardarCategoria(tmpCategoria).subscribe( (data: any) => {
      //console.log(this.data);
      this.router.navigate(['/categorias']);
    });
  }

  private async obtenerCategoria(){
    this.codigo = this.activatedRoute.snapshot.params.id;
    console.log('el codigo:',this.codigo);
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
