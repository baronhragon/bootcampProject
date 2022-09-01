import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../service.service';

@Component({
  selector: 'app-ganador',
  templateUrl: './ganador.page.html',
  styleUrls: ['./ganador.page.scss'],
})
export class GanadorPage implements OnInit {

  public results:any;
  public parse:any;
  public amigos:any;


  constructor(private router:Router,public api: ApiService) { 
    
  }

  ngOnInit() {
    this.results = JSON.parse(sessionStorage.getItem('idproductR'));
    const menu = this.results[0]
    localStorage.setItem('idproduct',JSON.stringify(menu));
    console.log(menu);
    this.parse = JSON.parse(localStorage.getItem('idUser'));
    this.amigos = JSON.parse(localStorage.getItem('amigos'));

  }

  Rechazar(){
    localStorage.removeItem('idproduct');
    localStorage.removeItem('amigos');
    sessionStorage.removeItem('idproductR');
    this.router.navigate(['/home']);
  }
  Home(){
    this.router.navigate(['/home']);
  }
 async Carta(){
  await this.notification();

    this.router.navigate(['/carta']);
  }
  infoBD(){

  }
  async notification(){
    for (let i = 0; i <  this.amigos.length; i++)  {
      const idUser = this.parse[i].idUser;
      let change = {
        idUser: idUser,
        notification: true,
      };
      console.log(change);
      this.api.changeNotification(change).subscribe((res) => {
        let resLocal;
        resLocal = res;
      });
    }
      
    }


}
