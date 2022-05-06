/* eslint-disable @typescript-eslint/ban-types */
import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Organizador } from '../interfaces/organizador';



@Injectable({
  providedIn: 'root'
})
export class OrganizadoresService {

  api = 'http://localhost:3000/organizador';

  constructor(public http: HttpClient) { }

  public listarOrganizadores(): Observable<any>{
    const path = `${this.api}/list`;
    return this.http.get(path);
  }

   obtenerOrganizador(id: string){
    const path = `${this.api}/find/${id}`;
    return this.http.get(path);
  }

  public filtrarOrganizador(texto: String){
    return this.http.get(this.api+`-filter?q=${texto}`);
  }

  public guardarOrganizadorService(organizador: any){
    const path = `${this.api}`;
    if (organizador.org_codigo){
      return this.http.put(path+'/update',organizador); //actualizacion
    }else{
      return this.http.post(path+'/create',organizador); //creacion - nuevo
    }
  }

  eliminarOrganizadorService(id: Observable<Organizador[]>) {
    return this.http.delete<Organizador[]>('http://localhost:3000/organizador/remove/' + id);
  }

}


