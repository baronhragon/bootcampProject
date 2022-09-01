import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rechazar',
  templateUrl: './rechazar.page.html',
  styleUrls: ['./rechazar.page.scss'],
})
export class RechazarPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  Inicio(){
    console.log("clickity click!");
    this.router.navigate(['/home']);
  }

}
