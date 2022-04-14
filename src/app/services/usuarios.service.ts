/* eslint-disable @typescript-eslint/member-ordering */
/* eslint-disable @typescript-eslint/naming-convention */
import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Usuario } from '../interfaces/usuario.interface';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  private usuario: Usuario ;

  api = 'http://localhost:3000/usuario';

  constructor(public http: HttpClient) { }


  getUsuario(){
    return {...this.usuario};
  }

  obtenerUsuarioService(id: number){
    const path = `${this.api}/find/${id}`;
    return this.http.get(path);
  }

  crearUsuario(usuario){
    const path = `${this.api}/create`;
    return this.http.post(path,usuario)
    .subscribe(resp => {
      console.log(resp);
    });
  }

  actualizarUsuarioService(usu_codigo, usuario) {
    return this.http.put('http://localhost:3000/usuario/update/' + usu_codigo, usuario);
  }

}
