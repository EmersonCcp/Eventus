import { Component, OnInit } from '@angular/core';
import { EventosService } from '../../services/eventos.service';

@Component({
  selector: 'app-eventos-detalle',
  templateUrl: './eventos-principal.page.html',
  styleUrls: ['./eventos-principal.page.scss'],
})
export class EventosDetallePage implements OnInit {

  public eventoPrimario: any = [];
  eventos = [];
  public codigo: string;
  constructor(private eventoService: EventosService) {

   }

  ngOnInit() {
    this.obtenerEvento();
    this.listarEventos();
  }
  ionViewWillEnter(){
    this.listarEventos();

  }

 listarEventos(){
   this.eventoService.listarEventosService()
   .subscribe((data:any) => {
     console.log(data);
     this.eventos = data.eventos;
   });
 }

 private async obtenerEvento() {
  this.codigo = '1';
  if (this.codigo !== '0') {
    this.eventoService
      .obtenerEvento(this.codigo)
      .subscribe((data: any) => {
        console.log(data);
        this.eventoPrimario = {
            codigo: data.evento.eve_codigo,
            titulo: data.evento.eve_nombre,
            descripcion: data.evento.eve_descripcion,
            horario: data.evento.eve_ubicacion,
            img: data.evento.eve_img
          }
        ;
      });
  }
}

}
