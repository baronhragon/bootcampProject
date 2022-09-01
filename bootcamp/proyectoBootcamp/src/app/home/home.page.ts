import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  ActionPerformed,
  LocalNotifications,
  LocalNotificationSchema,
} from '@capacitor/local-notifications';
import { ModalController, NavController } from '@ionic/angular';
import { ModalPage } from '../modal/modal.page';
import { ApiService } from '../service.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  constructor(
    public navCtrl: NavController,
    public router: Router,
    public modalController: ModalController,
    private api: ApiService
  ) {}

  public results = [];
  public imagesUrl = 'http://74.208.181.113:3000/images/';

  slidesOptions = {
    initialSlide: 0,
    speed: 300,
    loop: true,
    autoplay: true,
  };

  async openModal() {
    const modal = await this.modalController.create({
      component: ModalPage,
      initialBreakpoint: 0.6,
      breakpoints: [0, 0.6],
      cssClass: 'modal',
    });
    return await modal.present();
  }

  ngOnInit() {
    this.restaurantsGet();
  }


  Historial() {
    this.router.navigate(['/historial']);
  }
  Contactos() {
    this.router.navigate(['/contactos']);
  }
  ModalFilter() {
    this.router.navigate(['/modal-filter']);
  }

  Carta(i) {
    // console.log(this.results[i].idRestaurant);
    localStorage.setItem('idproduct', JSON.stringify(this.results[i]));
    this.router.navigate(['/carta']);
  }
  map() {
    this.router.navigate(['/map']);
  }
  profile() {
    this.router.navigate(['/profile']);
  }
  restaurantsGet() {
    this.api.restaurantsGet().subscribe((responseFromTheServer) => {
      let responseLocal;
      responseLocal = responseFromTheServer;
      this.results = responseLocal.recordset;
    });
  }
}
