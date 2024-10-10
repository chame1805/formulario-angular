import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';
import { MostrarDatosComponent } from './mostrar-datos/mostrar-datos.component';
import { RegistroComponent } from './registro/registro.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
  
    MostrarDatosComponent,
    RegistroComponent,
    LoginComponent,
    
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    
    MostrarDatosComponent ,
    RegistroComponent,
    LoginComponent
  ]
})
export class UsersModule { }
