import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.page.html',
  styleUrls: ['./staff.page.scss'],
})
export class StaffPage implements OnInit {

  staffs: any[];
  constructor() {
    this.staffs = [
      {
        nombre:'Jose',
        apellido:'Nuñez',
        foto: '/assets/img/personas/1.jpg',
        cargo: 'Lider',
        descripcion: 'A 5 años haciendo eventos'
      },
      {
        nombre:'Silvia',
        apellido:'Silvero',
        foto: '/assets/img/personas/2.jpg',
        cargo: 'Colaboradora',
        descripcion: 'A 2 años haciendo eventos'
      },
      {
        nombre:'Maria',
        apellido:'Gimenez',
        foto: '/assets/img/personas/3.jpg',
        cargo: 'Tesorera',
        descripcion: 'A 4 años haciendo eventos'
      },
      {
        nombre:'Juana',
        apellido:'Tandi',
        foto: '/assets/img/personas/4.jpg',
        cargo: 'Publicidad',
        descripcion: 'A 1 años haciendo eventos'
      }
    ];
  }

  ngOnInit() {
  }

}
