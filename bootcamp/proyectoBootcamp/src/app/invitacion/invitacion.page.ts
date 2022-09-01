import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'invitacion.page.html',
  styleUrls: ['invitacion.page.scss'],
})
export class InvitacionPage {

  constructor(private router:Router) { }

  Aceptar(){
    this.router.navigate(['/aceptar']);
  }
  Rechazar(){
    this.router.navigate(['/rechazar']);
  }
  Home(){
    this.router.navigate(['/home']);
  }
  Carta(){
    this.router.navigate(['/carta']);
  }
}
