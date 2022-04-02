import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ServicesComponentService {

  public eventosSecundarios: any[] = [
    {
      titulo: 'Grupo Grace',
      descripcion: '',
      horario:'jue,mar 10 | 15:30 GMT-03:00',
      ciudad:'',
      ubicacion:'',
      img: 'assets/img/eventos/grace.jpg'
    },
    {
      titulo: 'MercyMe',
      descripcion: '',
      horario:'mier,lun 12 | 13:30 GMT-02:00',
      ciudad:'',
      ubicacion:'',
      img: 'assets/img/eventos/mercyme.jpg'
    },
    {
      titulo: 'Barak - Texas',
      descripcion: '',
      horario:'lun,mar 17 | 15:00 GMT-03:00',
      ciudad:'',
      ubicacion:'',
      img: 'assets/img/eventos/barak.jpg'
    },
    {
      titulo: 'Hillsong United - New York',
      descripcion: '',
      horario:'dom,mar 3 | 15:30 GMT-05:00',
      ciudad:'',
      ubicacion:'',
      img: 'assets/img/eventos/hillsong.jpg'
    },
    {
      titulo: 'DJPV Rio de Janeiro',
      descripcion: '',
      horario:'jue,sab 10 | 15:30 GMT-02:00',
      ciudad:'',
      ubicacion:'',
      img: 'assets/img/eventos/djpv.jpg'
    }
  ];;
  constructor() { }


}
