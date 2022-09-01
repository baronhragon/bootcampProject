import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { ModalInvitacionPage } from '../modal-invitacion/modal-invitacion.page';
import { ApiService } from '../service.service';

@Component({
  selector: 'app-seleccion-restaurante',
  templateUrl: './seleccion-restaurante.page.html',
  styleUrls: ['./seleccion-restaurante.page.scss'],
})
export class SeleccionRestaurantePage implements OnInit {

  results:any=[];
  restaurant=[]
  public imagesUrl = "http://74.208.181.113:3000/images/";
  current = [];
  
  constructor(public router:Router,public modalController: ModalController,private api:ApiService,public routers:NavController) { }

  ngOnInit() {
    this.restaurantsGet();
  }

  
  option = {
    slidesPerView:1.8,
    centeredSlides:true,
    loop: true,
    spaceBetween:10,
  }
  optionTypes = {
    slidesPerView:3,
    centeredSlides:true,
    spaceBetween:10,
    loop: true,
  }

  // async openModalInv() {
  //   const modal = await this.modalController.create({
  //     component: ModalInvitacionPage,
  //     initialBreakpoint: 0.6,
  //     breakpoints: [0, 0.6],
  //     cssClass: 'modal',
  //   });
  //   return await modal.present();
  // }

  Votacion(){
    localStorage.setItem("selection",JSON.stringify(this.current))
    this.router.navigate(['/seleccion-invitado']);
  }

  restaurantsGet(){

    this.api.restaurantsGet().subscribe((responseFromTheServer) => {
      let responseLocal;
      responseLocal = responseFromTheServer;
      this.results = responseLocal.recordset;
    });
}

saveContacts(i) {
  console.log('Nuevo estado:' + JSON.stringify(i));
    if(i.check === false){
      this.restaurant.push(i);
  } else {
    let index = this.restaurant.indexOf(i)
    this.restaurant.splice(index,1);
  }
  console.log(this.restaurant);

}

accept(){
  sessionStorage.setItem('idproductR', JSON.stringify(this.restaurant));
  this.router.navigate(['/ganador']);
}


}