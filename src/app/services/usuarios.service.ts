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

  obtenerUsuarioService(id: string){
    const path = `${this.api}/find/${id}`;
    console.log(path);
    return this.http.get(path);
  }

  crearUsuario(usuario){
    const path = `${this.api}/create`;
    return this.http.post(path,usuario)
    .subscribe(resp => {
      console.log(resp);
    });
  }

  actualizarUsuarioService( usuario) {
    const path = `${this.api}/update`;
    return this.http.put(path, usuario);
  }

  public guardarUsuario(usuario: any){
    const path = `${this.api}`;
    if (usuario.usu_codigo){
      return this.http.put(path+'/update',usuario); //actualizacion
    }else{
      return this.http.post(path+'/create',usuario); //creacion - nuevo
      console.log(path);
    }
  }

  loginUsuarioService(usuario){
    const path = 	`${this.api}/login`;
    return this.http.post(path,usuario);
  }

  logoutUsuarioService(usuario){
    const path = 	`${this.api}/logout`;
    return this.http.post(path,usuario);
  }

}
