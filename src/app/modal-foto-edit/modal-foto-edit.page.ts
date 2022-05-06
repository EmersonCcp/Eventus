import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FileUploader } from 'ng2-file-upload';
import { ToastrService } from 'ngx-toastr';
const URL: any = 'localhost:3000/organizador/uploads';

@Component({
  selector: 'app-modal-foto-edit',
  templateUrl: './modal-foto-edit.page.html',
  styleUrls: ['./modal-foto-edit.page.scss'],
})
export class ModalFotoEditPage implements OnInit {
  constructor(
    private modalController: ModalController
  ) { }

  ngOnInit() {
  }
  closeModal() {
    this.modalController.dismiss(null, 'backdrop');
  }

  startCapture(type) {
    this.modalController.dismiss(type, 'select');
  }
}
