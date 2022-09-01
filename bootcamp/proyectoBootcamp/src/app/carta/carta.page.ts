import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonItem } from '@ionic/angular';
import { PassThrough } from 'stream';
import { ApiService } from '../service.service';


@Component({
  selector: 'app-carta',
  templateUrl: './carta.page.html',
  styleUrls: ['./carta.page.scss'],
})
export class CartaPage implements OnInit {

  public results = [];
  public order=[];
  public visible:boolean=true;
  public products:any;
  public imagesUrl = "http://74.208.181.113:3000/images/";
  

  constructor(public router: Router, private api:ApiService) { }

  ngOnInit() {
    const ida = localStorage.getItem('idproduct');
    this.products = JSON.parse(ida)
    let id = this.products;
    this.api.productList(id).subscribe((responseFromTheServer) => {
      let responseLocal;
      responseLocal = responseFromTheServer;
      this.results = responseLocal.recordset;
      console.log(this.results);
    });
  }

  Home(){
    localStorage.removeItem('idproduct')
    this.router.navigate(['/home']);
  }

  map(){
    this.router.navigate(['/map']);
  }

  goToCart(){
    this.generateOrder();
    this.router.navigate(['/cart'])
}

  addProduct(pid){
    pid.quantity += 1;
  }

  generateOrder(){
    for (let result of this.results){
      if (result.quantity > 0){
        this.order.push(result);
      }
    }
    localStorage.setItem('order',JSON.stringify(this.order));
  }

  removeProduct(pid){
    if (pid.quantity == 1){
      pid.quantity-=1;
      this.visible=false;
    }
    else if (pid.quantity > 0) {
      pid.quantity-=1;
    }
    else{
      this.visible=false;
    }
  }

}
