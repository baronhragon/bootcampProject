import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aceptar',
  templateUrl: './aceptar.page.html',
  styleUrls: ['./aceptar.page.scss'],
})
export class AceptarPage implements OnInit {

  public persona =["Melany Jiménez"];

  constructor(private router:Router) { }

  ngOnInit() {

  }
 continuar(){
    console.log("clickity click!");
    this.router.navigate(['/vote']);
  }
}
