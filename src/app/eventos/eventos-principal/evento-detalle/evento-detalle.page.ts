/* eslint-disable @typescript-eslint/member-ordering */
import { Component, OnInit } from '@angular/core';
import { EventosService } from '../../../services/eventos.service';
import {ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-evento-detalle',
  templateUrl: './evento-detalle.page.html',
  styleUrls: ['./evento-detalle.page.scss'],
})
export class EventoDetallePage implements OnInit {

  constructor(
    private eventoService: EventosService,
    private activatedRoute: ActivatedRoute) { }
  public eventoPrimario: any = [];
  eventos = [];
  public codigo: string;
  ngOnInit() {
    this.obtenerEvento();
  }

  private async obtenerEvento() {
    this.codigo = this.activatedRoute.snapshot.params.id;
    console.log('el id es:',this.codigo);
    if (this.codigo !== '0') {
      this.eventoService
        .obtenerEvento(this.codigo)
        .subscribe((data: any) => {
          console.log(data);
          this.eventoPrimario = {
              titulo: data.evento.eve_nombre,
              descripcion: data.evento.eve_descripcion,
              ubicacion: data.evento.eve_ubicacion,
              fecha: data.evento.eve_fecha,
              img: data.evento.eve_img,
              entrada: data.evento.eve_entradas,
              estado: data.evento.eve_estado
            }
          ;
        });
    }
  }

}
