import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;
  loginError = false;

  constructor(private fb: FormBuilder, private dataService: DataServiceService) {
    this.loginForm = this.fb.group({
      nombre: [''],
      correo: ['']
    });
  }

  login() {
    const nombre = this.loginForm.get('nombre')?.value;
    const correo = this.loginForm.get('correo')?.value;

    const isLoggedIn = this.dataService.loginUser(correo, nombre);
    if (isLoggedIn) {
      console.log("Login exitoso");
      this.loginError = false;
      alert("Bienvenido")
    } else {
      console.log("Credenciales incorrectas");
      this.loginError = true;
    }  
  }
}
