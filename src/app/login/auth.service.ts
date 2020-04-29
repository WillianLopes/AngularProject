import { Injectable, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../Models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private userValid: boolean;

  showMenuEmitter: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private router: Router) { }

  doLogin(user: User){
    if(user.name === 'wapolina' && user.password === '123456'){
      this.userValid = true;

      this.showMenuEmitter.emit(true);

      this.router.navigate(['/home']);
    }else{
      this.userValid = false;

      this.showMenuEmitter.emit(false);

      alert('Credenciais inválidas.')
    }
  }

  logout(){
    this.userValid = false;
    this.router.navigate(['login']);
  }
}
