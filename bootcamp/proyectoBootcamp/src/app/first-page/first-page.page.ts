import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, NavController } from '@ionic/angular';
import { ApiService } from '../service.service';

@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.page.html',
  styleUrls: ['./first-page.page.scss'],
})
export class FirstPagePage implements OnInit {

  email:string;
  password:string;

  constructor(private router: Router, public alertController: AlertController, public navCtrl: NavController,private api:ApiService) {

  }

  ngOnInit() {}

  googleAuth() {}

  facebookAuth() {}

  newAuth() {
    this.router.navigate(['/register']);
  }
  loginAuth() {
    this.router.navigate(['/login']);
  }
}
