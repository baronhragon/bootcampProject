import { Component, OnInit } from '@angular/core';
import { MapPageModule } from '../map/map.module';

@Component({
  selector: 'app-forget',
  templateUrl: './forget.page.html',
  styleUrls: ['./forget.page.scss'],
})
export class ForgetPage implements OnInit {

  constructor(private mod:MapPageModule) { }

  ngOnInit() {
  }

}
