import { Component, OnInit } from '@angular/core';
import { ServicesComponentService } from 'src/app/services/services-component.service';

@Component({
  selector: 'app-buscar-eventos',
  templateUrl: './buscar-eventos.page.html',
  styleUrls: ['./buscar-eventos.page.scss'],
})
export class BuscarEventosPage implements OnInit {

  constructor(eventosSecundarios: ServicesComponentService) { }

  ngOnInit() {
  }

}
