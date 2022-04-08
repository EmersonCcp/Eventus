/* eslint-disable @typescript-eslint/ban-types */
import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Organizador } from '../interfaces/organizador';


@Injectable()
export class OrganizadoresService {

  api = 'http://localhost:3000/organizador';
  constructor(public http: HttpClient) { }

  public listarOrganizadores(): Observable<any>{
    const path = `${this.api}/list`;
    return this.http.get(path);
  }

   obtenerOrganizador(id: number){
    const path = `${this.api}/find/${id}`;
    return this.http.get(path);
  }

  public filtrarOrganizador(texto: String){
    return this.http.get(this.api+`-filter?q=${texto}`);
  }

  crearOrganizador(organizador){
    const path = `${this.api}/create`;
    return this.http.post(path,organizador)
    .subscribe(resp => {
      console.log(resp);
    });
  }

  // eslint-disable-next-line @typescript-eslint/naming-convention
  actualizarOrganizador(org_codigo, organizador: Organizador) {
    return this.http.put('http://localhost:3000/organizador/update/' + org_codigo, organizador);
  }

  eliminarOrganizadorService(id: Observable<Organizador[]>) {
    return this.http.delete<Organizador[]>('http://localhost:3000/organizador/remove/' + id);
  }

}


