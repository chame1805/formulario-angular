import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
  dataForm: FormGroup;

  constructor(private fb: FormBuilder, private dataService: DataServiceService) {
    this.dataForm = this.fb.group({
      nombre: [''],
      correo: ['']
    });
  }

  envioDatos() {
    this.dataService.recibeData(this.dataForm.value);
    console.log("Usuario registrado:", this.dataForm.value);
    this.dataForm.reset();
  }
}
