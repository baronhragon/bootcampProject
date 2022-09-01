import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import {SmsManager} from "@byteowls/capacitor-sms";
import {Device, DeviceInfo} from "@capacitor/device";

@Component({
  selector: 'app-contactos',
  templateUrl: './contactos.page.html',
  styleUrls: ['./contactos.page.scss'],
})

// export interface PhoneContact {
//   contactId: string;
//   lookupKey: string;
//   displayName: string;
//   phoneNumbers: [string];
//   emails: [string];
// }
export class ContactosPage implements OnInit {
  iosOrAndroid: boolean;
  room = [];
  public contacts: any = [];
  public results: any = [];
  public finished: boolean = false;
  public user:any;
  
  constructor(public router:NavController) {}

  async ngOnInit() {
    const id = localStorage.getItem('idUser');
    this.user = JSON.parse(id)
    this.results = JSON.parse(sessionStorage.getItem('existing'));
    this.contacts = JSON.parse(sessionStorage.getItem('phoneContacts'));
    console.log(this.results);
    console.log(this.contacts);

    const info: DeviceInfo = await Device.getInfo();
    this.iosOrAndroid = (info.platform === "android" || info.platform === "ios");
  }

  sendSms(contactPhone) {
    console.log(contactPhone);
    console.log(this.user[0].nombre);
    const numbers: string[] = [contactPhone];
    SmsManager.send({
        numbers: numbers,
        text: this.user[0].nombre + " is inviting you to meat on FoodTeams. Click the following link to download the application and accept the invitation. https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Gregory_and_watermelon.jpg/245px-Gregory_and_watermelon.jpg",
    }).then(() => {
        // success
    }).catch(error => {
        console.error(error);
    });
    }

  saveContacts(i) {
    console.log('Nuevo estado:' + JSON.stringify(i));
    if(i.check === false){
      this.room.push(i);
    } else {
      let index = this.room.indexOf(i)
      this.room.splice(index,1);
    }
    console.log(this.room);
  }

  notificacionBD(){
    localStorage.setItem('amigos',JSON.stringify(this.room));
    this.router.navigateRoot('seleccion-restaurante');

  }
  Home(){
    this.router.pop();
  }
}



