import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {


  constructor() { }

  ngOnInit() {
  }
  public users =[
    {
      "id": 1,
      "name": "Mexican food" 
    },
    {
      "id": 2,
      "name": "American food"
    },
    {
      "id": 3,
      "name": "Italian food"
    },
    {
      "id": 4,
      "name": "Japanese food"
    },
    {
      "id": 5,
      "name": "Vegetarian restaurants"
    },
    {
      "id": 6,
      "name": "Meat restaurants"
    },
  ]

}
