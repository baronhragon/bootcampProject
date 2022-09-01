import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { registerPlugin } from '@capacitor/core';
import { ApiService } from './service.service';
import { Contacts } from '@capacitor-community/contacts';
import { BackgroundGeolocationPlugin } from '@capacitor-community/background-geolocation';
import {
  ActionPerformed,
  LocalNotifications,
} from '@capacitor/local-notifications';
const BackgroundGeolocation = registerPlugin<BackgroundGeolocationPlugin>(
  'BackgroundGeolocation'
);

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  contacts: any = [];
  results: any = [];
  finished: boolean = false;
  pushes: any = [];

  constructor(public router: NavController, public api: ApiService) {
    this.getPermissions();
    this.getContacts();
    notificationCheckUpdate();
    // guess(guess,5000);

    function save(location) {
      let lat = location.latitude;
      let lng = location.longitude;
      const id = localStorage.getItem('idUser');
      const parse = JSON.parse(id);
      const idUser = parse[0].idUser;

      let ubicaciones = {
        idUser: idUser,
        lat: lat,
        lng: lng,
      };
      console.log(ubicaciones);
      api.postLocation(ubicaciones).subscribe((res) => {
        let resposeLocal;
        res = resposeLocal;
      });
    }

    async function make_guess(callback, timeout) {
      return new Promise(function (resolve) {
        let last_location = null;
        let id;
        BackgroundGeolocation.addWatcher(
          {
            requestPermissions: false,
            stale: true,
          },
          function callback(location) {
            last_location = location;
            save(last_location);
          }
        ).then(function retain_callback_id(the_id) {
          id = the_id;
        });

        setTimeout(function () {
          resolve(last_location);
          callback(last_location);
          BackgroundGeolocation.removeWatcher({ id });
        }, timeout);
      });
    }

    async function guess(callback, timeout) {
      return await make_guess(callback, timeout).then(function (location) {
        return location;
      });
    }

    function notificationCheckUpdate() {
      const local = localStorage.getItem('idUser');
      const parse = JSON.parse(local);
      const idUser = parse[0].idUser;
      let id = {
        id: idUser,
      };
      console.log(id);
      api.checkNotification(id).subscribe((responseFromTheServer) => {
        let responseLocal;
        responseLocal = responseFromTheServer;
        const respuesta = responseLocal.recordset[0].notification;
        if (respuesta === true) {
          console.log('si hay notificaciones');
          notification();
          let change = {
            idUser: idUser,
            notification: false,
          };
          console.log(change);
          api.changeNotification(change).subscribe((res) => {
            let resLocal;
            resLocal = res;
          });
        } else {
          console.log('No hay notificaciones');
        }
      });
      setTimeout(() => {
        notificationCheckUpdate();
      }, 10000);
    }

    function notification() {
      LocalNotifications.requestPermissions();

      LocalNotifications.schedule({
        notifications: [
          {
            title: 'You received a meat invitation!',
            body: '(User name) has invited you to meat at (Restaurant name)',
            id: 1,
            smallIcon: 'house',
            iconColor: 'blue',

            schedule: {
              repeats: false,
            },
          },
        ],
      });

      LocalNotifications.addListener(
        'localNotificationActionPerformed',
        (notificationAction: ActionPerformed) => {
          console.log(notificationAction);
          router.navigateRoot('invitacion');
        }
      );
    }

    if (window.localStorage.getItem('idUser') != null) {
      console.log('estas logeado');
    } else {
      router.navigateRoot('first-page'); //manda a la pantalla de inicio si no esta logeado
    }
  
  }

  ngOnInit() {}

  //contactos
  async getPermissions(): Promise<void> {
    Contacts.getPermissions();
  }

  async getContacts(): Promise<void> {
    Contacts.getContacts().then((result) => {
      for (const contact of result.contacts) {
        if (contact.phoneNumbers.length > 0) {
          let data = {
            phone: contact.phoneNumbers[0].number.replace(/ /g, ''),
            user: contact.displayName,
          };
          console.log(data);
          this.api.contactsPost(data).subscribe((responseFromTheServer) => {
            let responseLocal;
            responseLocal = responseFromTheServer;
            if (responseLocal.recordset.length != 0) {
              this.results.push(responseLocal.recordset[0]);
              sessionStorage.setItem('existing', JSON.stringify(this.results));
            } else {
              this.contacts.push(data);
              sessionStorage.setItem(
                'phoneContacts',
                JSON.stringify(this.contacts)
              );
            }
          });
        }
      }
      this.finished = true;
    });
  }
}
