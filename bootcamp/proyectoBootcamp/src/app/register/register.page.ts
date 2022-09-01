import { Component, OnInit } from '@angular/core';
import { Device } from '@capacitor/device';

import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { AlertController, NavController } from '@ionic/angular';
import { ApiService } from '../service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  formularioRegistro: FormGroup;
  email:string;
  password:string;
  confirmacionPassword:string;
  nombre: string;
  phone:number;
  passwordError: boolean;
  phoneId:string;
  uuid: any;
  phoneId2:string;
 
  constructor(public fb: FormBuilder,
    public alertController: AlertController,
    public navCtrl: NavController,private api:ApiService) {
    this.formularioRegistro = new FormGroup({
      nombre: new FormControl('',Validators.required),
      password: new FormControl('',Validators.required),
      email: new FormControl('',Validators.email),
      phone: new FormControl('',Validators.required),
      confirmacionPassword: new FormControl('',Validators.required),
    });
  }

  async guardar(){
    let f = this.formularioRegistro.value;
    let user = {
      nombre: f.nombre,
      password: f.password,
      address: f.address,
      email: f.email,
      phone:f.phone,
      confirmacionPassword: f.confirmacionPassword,
      phoneId:await this.logDeviceId(),
    }
    console.log(user);
    if(f.password === f.confirmacionPassword){
      this.passwordError = true;
      console.log(this.passwordError);

      this.api.userPostRegister(user).subscribe((responseFromTheServer)=>{
        console.log(user);
        let responseLocal;
        responseLocal=responseFromTheServer;
      })
      this.navCtrl.navigateRoot('login');

    }else{
      this.passwordError = false;
      console.log(this.passwordError);
      
    }
  }

  ngOnInit() {
    this.formularioRegistro = new FormGroup({
      nombre: new FormControl('',[Validators.required, Validators.email]),
      phone: new FormControl('',[Validators.required]),
      email: new FormControl('',[Validators.required]),
      password: new FormControl('',[Validators.required]),
      confirmacionPassword: new FormControl('',[Validators.required]),
    })
  }
  
  goBack() {
    this.navCtrl.navigateRoot('first-page');
  }
  newAuth() {
    this.navCtrl.navigateRoot('inicio');
  }
  
  async logDeviceId() {
    let id=await Device.getId();
    let uuid=id.uuid;
    return uuid;
  };
}