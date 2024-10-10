import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  private usersList = new BehaviorSubject<any[]>([]); 
  curreData = this.usersList.asObservable();
  private currentId = 0; 

  constructor() {}

  
  recibeData(newUser: any) {
    this.currentId += 1; 

   
    const userWithId = { id: this.currentId, ...newUser };

    
    const currentUsers = this.usersList.getValue();
    const updatedUsers = [...currentUsers, userWithId];

    
    this.usersList.next(updatedUsers);
  }

  
  loginUser(email: string, nombre: string): boolean {
    const users = this.usersList.getValue(); 
    const foundUser = users.find(user => user.correo === email && user.nombre === nombre);
    return foundUser ? true : false;
  }
}
