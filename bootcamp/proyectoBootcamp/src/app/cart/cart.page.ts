import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {

  constructor() { }

  public order=JSON.parse(localStorage.getItem('order'));

  ngOnInit() {

  }

  totalAmount(){
    let total=0;
    for (let item of this.order){
      total+=item.quantity*item.price;
    }
    return total;
  }

  sendOrderToRestaurant(){
    //TODO: Endpoint for sending info to cart
    console.log("Sending this order to restaurant:\n\t",this.order);
  }

}
