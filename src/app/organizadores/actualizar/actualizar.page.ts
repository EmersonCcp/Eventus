/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnInit } from '@angular/core';
import {OrganizadoresService} from '../../services/organizadores.service';
import { NavController, NavParams } from '@ionic/angular';
import { Organizador } from 'src/app/interfaces/organizador';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-actualizar',
  templateUrl: './actualizar.page.html',
  styleUrls: ['./actualizar.page.scss'],
})
export class ActualizarPage  implements OnInit{

  api = 'localhost:3000/organizador/find/';
  org_codigo = 12;
  organizador: Organizador;
  organizadores: any;
  id: any;
  updateOrganizadorForm: FormGroup;

  orgnombre: any;
  orgcargo: any;
  orgdescripcion: any;
  orgfoto: any;

  constructor(
    public orgService: OrganizadoresService,
    public formBuilder: FormBuilder,
    public router: Router,
    public activatedRoute: ActivatedRoute
    ) {
      this.id = this.activatedRoute.snapshot.paramMap.get('org_codigo');
    }

     ngOnInit() {
       console.log('Este es el iddddd',this.id);
       this.updateOrganizadorForm = this.formBuilder.group({
        org_nombre: [''],
        org_cargo: [''],
        org_descripcion: [''],
        org_foto: ['']
       });
      this.getDato(this.id);
      //this.id =
     }


  getDato(org_codigo){
    this.orgService.getDato(this.id)
    .subscribe(res => {
      console.log('DATAAAA',res);
      this.organizadores = res;
      this.orgnombre= this.organizadores.organizador["org_nombre"];
      this.orgcargo= this.organizadores.organizador["org_cargo"];
      this.orgdescripcion= this.organizadores.organizador["org_descripcion"];
      this.orgfoto= this.organizadores.organizador["org_foto"];
      console.log('organizadoressss', this.organizadores.organizador, this.orgnombre, this.orgcargo, this.orgdescripcion);
    }
    );
  }

  onSubmit(){
    console.log(this.updateOrganizadorForm.value);
  }
  updateForm() {
    console.log('codigo id metodo update', this.id);
      this.orgService.updateOrganizador(this.id, this.updateOrganizadorForm.value)
        .subscribe((res) => {
          console.log(res);
          this.updateOrganizadorForm.reset();
          this.router.navigate(['/organizadores']);
        });

  }


}
