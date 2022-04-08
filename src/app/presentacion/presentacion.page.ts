import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-presentacion',
  templateUrl: './presentacion.page.html',
  styleUrls: ['./presentacion.page.scss'],
})
export class PresentacionPage implements OnInit {

  slides: { img: string, titulo: string, desc: string }[] = [
    {
      img: '/assets/slides/placeholder.png',
      titulo: 'Encuentra Eventos',
      desc: 'Mira y comparte eventos cerca de ti!'
    },
    {
      img: '/assets/slides/whatsapp.png',
      titulo: 'Contactos directos',
      desc: 'Puede contactar a los organizadores!'
    },
    {
      img: '/assets/slides/ticket.png',
      titulo: 'Entradas',
      desc: 'Podras ver los tipos y precios'
    },
    {
      img: '/assets/slides/plus.png',
      titulo: 'Crear tus eventos',
      desc: 'Crea y gestiona tus propios eventos!'
    }
  ];
  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  onClick(){
    this.navCtrl.navigateBack('/eventos-principal');
  }

}
