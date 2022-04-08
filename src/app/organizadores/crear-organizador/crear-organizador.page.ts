/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnInit } from '@angular/core';
import {OrganizadoresService} from '../../services/organizadores.service';
import { NgForm } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-crear-organizador',
  templateUrl: './crear-organizador.page.html',
  styleUrls: ['./crear-organizador.page.scss'],
})
export class CrearOrganizadorPage implements OnInit {

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
    this.orgService.crearOrganizador(this.organizador);
    this.router.navigate(['/organizadores']);
    this.orgService.listarOrganizadores();
    console.log(this.organizador);
  }




}
