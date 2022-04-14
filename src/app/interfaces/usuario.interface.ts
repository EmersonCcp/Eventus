// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface Usuario {
  usu_codigo: string;
  usu_nombre: string;
  usu_apellido: string;
  usu_email: string;
  usu_password: string;
  usu_f_nac: string;
  usu_avatar: string;
}
export interface InicioSesion{
 correo: string;
 password: string;
}
