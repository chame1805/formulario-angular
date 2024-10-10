import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-mostrar-datos',
  templateUrl: './mostrar-datos.component.html',
  styleUrls: ['./mostrar-datos.component.css']
})
export class MostrarDatosComponent implements OnInit {
  usersList: any[] = [];

  constructor(private dataService: DataServiceService) {}

  ngOnInit(): void {
    this.dataService.curreData.subscribe(data => {
      if (data && data.length > 0) {
        console.log("Lista de usuarios recibida:", data);
        this.usersList = data; 
      } else {
        console.log("No hay usuarios disponibles.");
      }
    });
  }
}
