/* eslint-disable @typescript-eslint/dot-notation */
/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnInit } from '@angular/core';
import {OrganizadoresService} from '../services/organizadores.service';




@Component({
  selector: 'app-organizadores',
  templateUrl: './organizadores.page.html',
  styleUrls: ['./organizadores.page.scss'],
})
export class OrganizadoresPage implements OnInit{

  organizadors = [];
  org_codigo: number;

  constructor(private orgService: OrganizadoresService,
   ) {

   }
   ngOnInit(): void {
    this.listarOrganizadores();

   }

   ionViewWillEnter(){
    this.listarOrganizadores();
  }


   listarOrganizadores(){
    this.orgService.getDatos()
    .subscribe((data ) => {
      console.log(data);
      this.organizadors = data.organizadores;
    });
   }

  buscar(event){
    const valor = event.detail.value;

    this.orgService.filter(valor)
    .subscribe(data => {
      console.log(data);
      if(data){
        this.organizadors = data['organizador'];
      }else{
        this.organizadors = [];
      }
    });
  }



  eliminarOrganizador(organizador, i, slidingItem){
    console.log('eliminar, eliminar');
    if(window.confirm('Seguro que quieres eliminar?')){
      this.orgService.deleteOrganizadorService(organizador.org_codigo)
      .subscribe(() => {
        this.organizadors.splice(i,1);
        slidingItem.close();
        console.log('Organizador eliminado!');
      });
    }

  }







 /*
  update(){
    const organizador = {
      org_codigo: 6,
      org_nombre: 'Luis',
      org_cargo: 'Supervisor'
    };
    this.orgService.update(organizador)
    .subscribe(data => {
      console.log(data);
    });
  }

  remove(){
    this.orgService.delete(1)
    .subscribe((data) => {
      console.log(data);
    });
  } */


}
