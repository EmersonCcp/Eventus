import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Registro } from '../interfaces/usuario.interface';
import {ServicesComponentService} from '../services/services-component.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor() { }

  ngOnInit() {

  }


}
