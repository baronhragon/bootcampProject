import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  public user:any;

  constructor(public navCtrl: NavController ) { }

  ngOnInit() {
  const id = localStorage.getItem('idUser');
  this.user = JSON.parse(id)
  console.log(this.user);
  
  }
  
  signOut(){
    window.localStorage.removeItem('idUser');
    this.navCtrl.navigateRoot('first-page');
  }

}
