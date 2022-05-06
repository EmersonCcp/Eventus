/* eslint-disable @typescript-eslint/dot-notation */
/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnInit } from '@angular/core';
import {OrganizadoresService} from '../services/organizadores.service';
import { Router } from '@angular/router';




@Component({
  selector: 'app-organizadores',
  templateUrl: './organizadores.page.html',
  styleUrls: ['./organizadores.page.scss'],
})
export class OrganizadoresPage implements OnInit{

  organizadors = [];
  org_codigo: number;

  constructor(
    private orgService: OrganizadoresService,
    public router: Router,

   ) {

   }
   ngOnInit(): void {
    this.listarOrganizadores();

   }

   ionViewWillEnter(){
    this.listarOrganizadores();
  }
  ir(){
    this.router.navigate(['/organizadores/organizador/0']);
  }


   listarOrganizadores(){
    this.orgService.listarOrganizadores()
    .subscribe((data ) => {
      console.log(data);
      this.organizadors = data.organizadores;
    });
   }

  buscar(event){
    const valor = event.detail.value;

    this.orgService.filtrarOrganizador(valor)
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
      this.orgService.eliminarOrganizadorService(organizador.org_codigo)
      .subscribe(() => {
        this.organizadors.splice(i,1);
        slidingItem.close();
        this.ionViewWillEnter();
        console.log('Organizador eliminado!');
      });
    }

  }

}
