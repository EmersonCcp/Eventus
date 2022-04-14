import { Component, OnInit } from '@angular/core';
import {CategoriasService} from '../services/categorias.service';
import {Categoria} from '../interfaces/categoria';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.page.html',
  styleUrls: ['./categorias.page.scss'],
})
export class CategoriasPage implements OnInit {

  categorias = null;

  constructor(public categoriaService: CategoriasService,
    public toastController: ToastController ) { }

  ngOnInit() {
    this.listarCategorias();
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

   buscarCategoria(event){
    const valor = event.detail.value;

    this.categoriaService.filtrarCategoriaService(valor)
    .subscribe(data => {
      console.log(data);
      if(data){
        this.categorias = data['categoria'];
      }else{
        this.categorias = [];
      }
    });
  }

  eliminarCategoria(categoria, i, slidingItem){
    console.log('eliminar, eliminar');
    if(window.confirm('Seguro que quieres eliminar?')){
      this.categoriaService.eliminarCategoriaService(categoria.ca_codigo)
      .subscribe(() => {
        this.categorias.splice(i,1);
        slidingItem.close();
        this.ionViewWillEnter();
        this.mensajeEliminar();
        console.log('Categoria eliminada!');
      });
    }
  }

  //Mensaje de "eliminado"
  async mensajeEliminar() {
    const toast = await this.toastController.create({
      message: 'Se ha eliminado correctamente.',
      duration: 2000
    });
    toast.present();
  }

}
