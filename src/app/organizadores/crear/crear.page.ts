/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnInit } from '@angular/core';
import {OrganizadoresService} from '../../services/organizadores.service';
import { NgForm } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.page.html',
  styleUrls: ['./crear.page.scss'],
})
export class CrearPage implements OnInit {

  organizador = {
    org_codigo:null,
    org_nombre: '',
    org_cargo: '',
    org_descripcion: '',
    org_foto: null
  };

  constructor(public orgService: OrganizadoresService,
    public router: Router) { }

  ngOnInit() {
  }

  crearOrganizador(){
    this.orgService.create(this.organizador);
    this.router.navigate(['/organizadores']);
    console.log(this.organizador);
  }




}
