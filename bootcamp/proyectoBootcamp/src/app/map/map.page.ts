import {
  AfterViewInit,
  ElementRef,
  Component,
  OnInit,
  ViewChild,
} from '@angular/core';
import { NativeGeocoder, NativeGeocoderResult, NativeGeocoderOptions } from '@ionic-native/native-geocoder/ngx';
import { AlertController, NavController } from '@ionic/angular';
import { Geolocation } from '@capacitor/geolocation';
import { GoogleMap, Marker } from '@capacitor/google-maps';
import { environment } from 'src/environments/environment';
import { ApiService } from '../service.service';


@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})

export class MapPage implements OnInit, AfterViewInit {

  public geoCoderOptions: NativeGeocoderOptions = {
    useLocale: true,
    maxResults: 5
  };


  public results=[];
  public userPos=[];
  public restaurant=[];
  public user_distances=[];
  public transMode=['walking','cycling','driving'];
  public avgETA='';

  @ViewChild('map',{read:ElementRef,static:false}) mapRef: ElementRef; newMap: GoogleMap;  marker:string; markers:Marker[];

  constructor(private nativeGeocoder: NativeGeocoder, private api:ApiService, public navCtrl: NavController){
  }

  public coordinates = Geolocation.getCurrentPosition();
  public adress;

  ngOnInit() {
    this.restaurantsGetCoords();
    this.make(1000);
  }

  ngAfterViewInit(): void {
      this.createMap();
  }


  make(timeout){
    this.api.getLocation().subscribe((res)=> {
     let resLocal;
     resLocal = res;
     let userPos=resLocal.recordset;
     this.addUserMarker(userPos);
     this.addRestaurantMarker(this.restaurant['recordset']);
     this.user_distance(userPos,this.restaurant['recordset'][0]);
     console.log('users: ',this.user_distances);
     console.log('ETAs: ',this.group_ETA());
     console.log(this.average_ETA());
   });
   setTimeout(()=>{
    this.make(timeout);
   }, timeout);
  }

  async addUserMarker(userPos) {
    for(let marker of userPos ){
      console.log(marker);
      await this.newMap.addMarker({
        coordinate:{
          lat:marker.lat,
          lng:marker.lng,
        }
      })
    }
  }


  //H
  async addRestaurantMarker(restaurant) {
    for(let marker of restaurant){
      console.log(marker);
      await this.newMap.addMarker({
        coordinate:{
          lat:marker.lat,
          lng:marker.lng,
        },
        title:marker.nameRestaurant,
        iconUrl:'../../assets/marker.png',
        
      })
    }
  }

  async createMap(){
    this.newMap = await GoogleMap.create({
      id:'map',
      element:this.mapRef.nativeElement,
      apiKey:environment.apiKey,
      config:{
        center:{
          lat: (await this.coordinates).coords.latitude,
          lng: (await this.coordinates).coords.longitude,
        },
        zoom:18,
      },
    });
    this.adress = await this.reverseGeoCoding((await this.coordinates).coords.latitude, (await this.coordinates).coords.longitude);

    const adressDiv = document.getElementById('adress');
    adressDiv.textContent = this.adress.areasOfInterest[0] + ', ' + this.adress.subLocality + ', ' + this.adress.thoroughfare;
  }
  
  reverseGeoCoding(lat, lng) {
    return this.nativeGeocoder.reverseGeocode(lat, lng, this.geoCoderOptions)
      .then((result: NativeGeocoderResult[]) => {
        console.log(JSON.stringify(result[0]));
        return result[0];
      })
    .catch((error: any) => {
      console.log(error);
      throw(error);
    });
  }

  
 async restaurantsGetCoords(){
   this.api.restaurantsGetCoords().subscribe((responseFromTheServer) => {
    let responseLocal;
    responseLocal = responseFromTheServer;
     this.restaurant=responseLocal;
    });
}

  popPage() {
    this.navCtrl.pop();
  }

    //H
  user_distance(users,restaurant){
  let distances=[]
  console.log(users);
  for (let user of users){
      let uDistance=distance(user['lat'],restaurant['lat'],
        user['lng'],restaurant['lng']);
      distances.push(uDistance);
      this.user_distances=distances;
      console.log('user:',uDistance);
  }

}

group_ETA(mode='driving'){

  let velocities={
    // velocities are in km/h format
    'walking':5,
    'cycling':13,
    'driving':30
  };

  let ETAS=[];

  for (let distance of this.user_distances){
    let eta=distance/velocities[mode];
    ETAS.push(eta);
  }

  return ETAS;

}

average_ETA(){

  let group=this.group_ETA();
  let avg=0;

  for (let time of group){
    avg+=time;
  }

  let groupAvg=avg/group.length;

  this.avgETA= (groupAvg > 1 ? `Your group is ${Math.ceil(groupAvg)} hours away`:
          `Your group is ${Math.ceil(60*groupAvg)} minutes away`);



}

}

//H
function distance(lat1,
      lat2, lon1, lon2)
    {

    // The math module contains a function
    // named toRadians which converts from
    // degrees to radians.
    lon1 =  lon1 * Math.PI / 180;
    lon2 = lon2 * Math.PI / 180;
    lat1 = lat1 * Math.PI / 180;
    lat2 = lat2 * Math.PI / 180;

    // Haversine formula
    let dlon = lon2 - lon1;
    let dlat = lat2 - lat1;
    let a = Math.pow(Math.sin(dlat / 2), 2)
    + Math.cos(lat1) * Math.cos(lat2)
    * Math.pow(Math.sin(dlon / 2),2);

    let c = 2 * Math.asin(Math.sqrt(a));

    // Radius of earth in kilometers. Use 3956
    // for miles
    let r = 6371;

    // calculate the result
    return(c * r);
    }