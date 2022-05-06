import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Evento } from '../interfaces/evento.interface';

@Injectable({
  providedIn: 'root'
})
export class EventosService {

  api = 'http://localhost:3000/evento';

  constructor(public http: HttpClient) { }

  public listarEventosService(): Observable<any>{
    const path = `${this.api}/list`;
    return this.http.get(path);
  }

  public filtrarEventoService(texto: string){
    return this.http.get(this.api+`list-filter?q=${texto}`);
  }

  eliminarEventoService(id: Observable<Evento[]>) {
    return this.http.delete<Evento[]>(this.api+ `/remove/` + id);
  }


  public guardarEvento(evento: any){
    const path = `${this.api}`;
    if (evento.eve_codigo){
      return this.http.put(path+'/update',evento); //actualizacion
    }else{
      return this.http.post(path+'/create',evento); //creacion - nuevo
    }
  }
}
