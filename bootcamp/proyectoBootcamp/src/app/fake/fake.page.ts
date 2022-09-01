import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { FormGroup, NgForm, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ApiService } from '../service.service';
import { ActionPerformed, LocalNotifications } from '@capacitor/local-notifications';

@Component({
  selector: 'app-fake',
  templateUrl: './fake.page.html',
  styleUrls: ['./fake.page.scss'],
})
export class FakePage implements OnInit {

  public results = [];

  registerForm: FormGroup;

  option = {
    slidesPerView:4,
    centeredSlides:true,
    loop: true,
    spaceBetween:10,
  }

  constructor(private api:ApiService, public formBuilder: FormBuilder, public router:NavController) { 
    this.registerForm = new FormGroup({
      nombre: new FormControl(),
      address: new FormControl(),
    })
  }



  ngOnInit() {
  }

  notification() {
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
            repeats:false,
          },
        },
      ],
    });
    LocalNotifications.addListener('localNotificationActionPerformed',(notificationAction:ActionPerformed)=>{
      console.log(notificationAction);
      this.router.navigateRoot('invitacion');
    })
  }

  getAllUsers(){
    this.api.pruebaGet().subscribe((responseFromTheServer)=> {
      let responseLocal;
      responseLocal = responseFromTheServer;
      this.results = responseLocal.recordset;
    });
  }

  register(){
    let data = {
      nombre: this.registerForm.value.nombre,
      address: this.registerForm.value.address,
    }
    this.api.pruebaPost(data).subscribe((responseFromTheServer)=>{
      let responseLocal;
      responseLocal = responseFromTheServer;
    })

  }


}

