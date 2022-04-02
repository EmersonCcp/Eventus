import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  usuario = {
    nombre:'',
    apellido:'',
    correo:'',
    pass:'',
    passConf:'',
    f_nac:''
  };

  constructor() { }

  ngOnInit() {
  }

  registrar(){

  }

}
