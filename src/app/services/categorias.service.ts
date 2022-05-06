/* eslint-disable @typescript-eslint/ban-types */
import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Categoria} from '../interfaces/categoria';


@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  api = 'http://localhost:3000/categoria';

  constructor(public http: HttpClient) { }

  public listarCategoriasService(): Observable<any>{
    const path = `${this.api}/list`;
    return this.http.get(path);
  }

   obtenerCategoriaService(id: string){
    const path = `${this.api}/find/${id}`;
    return this.http.get(path);
  }

  public filtrarCategoriaService(texto: String){
    return this.http.get(this.api+`-filter?q=${texto}`);
  }

  crearCategoriaService(categoria){
    const path = `${this.api}/create`;
    return this.http.post(path,categoria)
    .subscribe(resp => {
      console.log(resp);
    });
  }

  public guardarCategoria(categoria: any){
    const path = `${this.api}`;
    if (categoria.ca_codigo){
      return this.http.put(path+'/update',categoria); //actualizacion
    }else{
      return this.http.post(path+'/create',categoria); //creacion - nuevo
    }
  }


  eliminarCategoriaService(id: Observable<Categoria[]>) {
    return this.http.delete<Categoria[]>('http://localhost:3000/categoria/remove/' + id);
  }



}
