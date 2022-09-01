import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';
import { Device } from '@capacitor/device';
import { AlertController, NavController } from '@ionic/angular';
import { ApiService } from '../service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  errorUser=false;

  email:string;
  password:string;
  formularioLogin: FormGroup;

  constructor(public fb: FormBuilder,
    public alertController: AlertController,
    public navCtrl: NavController,private api:ApiService) {
      this.formularioLogin = new FormGroup({
      email: new FormControl(),
      password: new FormControl()

    })
  }

  ngOnInit() {
    this.formularioLogin = new FormGroup({
      email: new FormControl('',[Validators.required, Validators.email]),
      password: new FormControl('',[Validators.required]),
    })
  }

  async ingresar(){
    let f = this.formularioLogin.value;
    let user = {
      email: f.email,
      password: f.password
    }

    this.api.userPostLogin(user).subscribe((responseFromTheServer)=>{
      let responseLocal;
      responseLocal=responseFromTheServer;

      if(responseLocal.recordset.length > 0){
        window.localStorage.setItem("idUser",JSON.stringify(responseLocal.recordset));
        this.navCtrl.navigateRoot('home');
        return;
      }else {
        console.log("incorrecto"); 
      }
    })
  }

  goBack() {
    this.navCtrl.navigateRoot('first-page');
  }
  signUp() {
    this.navCtrl.navigateRoot('register');
  }
  forget() {
    this.navCtrl.navigateRoot('forget');
  }
}