/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable eol-last */
export interface Evento {
  eve_codigo?: number;
  eve_nombre: string;
  eve_descripcion: string;
  eve_tags: string;
  eve_ubicacion: string;
  eve_estado: string;
  eve_entradas: string;
  eve_img: string;
  fk_categoria: number;
  eve_fecha: string;
}
