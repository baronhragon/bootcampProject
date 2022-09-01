import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-seleccion-invitado',
  templateUrl: './seleccion-invitado.page.html',
  styleUrls: ['./seleccion-invitado.page.scss'],
})
export class SeleccionInvitadoPage implements OnInit {

  results:any;
  public imagesUrl = "http://74.208.181.113:3000/images/";
  constructor(public router: Router, public nav:NavController) { }

  ngOnInit() {
    const id = localStorage.getItem('selection')
    this.results = JSON.parse(id)
  }
  AbreGanador(){
    this.router.navigate(['/ganador']);
  }
  Home(){
    this.nav.back();
  }


}
