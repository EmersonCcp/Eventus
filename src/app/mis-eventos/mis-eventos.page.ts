/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnInit } from '@angular/core';
import { EventosService } from '../services/eventos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mis-eventos',
  templateUrl: './mis-eventos.page.html',
  styleUrls: ['./mis-eventos.page.scss'],
})
export class MisEventosPage implements OnInit {

  eventos = [];
  eve_codigo: number;

  constructor(private eventosService: EventosService,
    public router: Router) { }

  ngOnInit() {
    this.listarEventos();
  }

  ionViewWillEnter(){
    this.listarEventos();
  }

  listarEventos(){
    this.eventosService.listarEventosService()
    .subscribe((data ) => {
      console.log(data);
      this.eventos = data.eventos;
    });
   }

   buscar(event){
    const valor = event.detail.value;
    this.eventosService.filtrarEventoService(valor)
    .subscribe(data => {
      console.log(data);
      if(data){
        this.eventos = data['evento'];
      }else{
        this.eventos = [];
      }
    });
  }

  eliminarEvento(evento, i, slidingItem){
    console.log('eliminar, eliminar');
    if(window.confirm('Seguro que quieres eliminar?')){
      this.eventosService.eliminarEventoService(evento.eve_codigo)
      .subscribe(() => {
        this.eventos.splice(i,1);
        slidingItem.close();
        this.listarEventos();
        console.log('Organizador eliminado!');
      });
    }

  }

}
