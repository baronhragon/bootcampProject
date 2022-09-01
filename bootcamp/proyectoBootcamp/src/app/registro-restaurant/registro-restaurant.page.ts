import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm, FormBuilder, FormControl, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { ApiService } from '../service.service';

@Component({
  selector: 'app-registro-restaurant',
  templateUrl: './registro-restaurant.page.html',
  styleUrls: ['./registro-restaurant.page.scss'],
})
export class RegistroRestaurantPage implements OnInit {
  
  public results = [];
  nameImg: string = "";
  dataImg: any;

  registerRestaurantForm: FormGroup;

  constructor(private api:ApiService, public formBuilder: FormBuilder, private sanitizer:DomSanitizer ) {
    this.registerRestaurantForm = new FormGroup({
      nameRestaurant: new FormControl(),
      address: new FormControl(),
      phone: new FormControl(),
      rType: new FormControl(),
      openLocal: new FormControl(),
      closeLocal: new FormControl(),
      lat: new FormControl(),
      lng: new FormControl(),
      shortDescription: new FormControl(),
      longDescription: new FormControl(),
    })
   }

  ngOnInit() {
    
  }


  onFile(event: any): void {
    console.log(event);
    const [file] = event.target.files;
    this.dataImg = {
      fileRaw:file,
      fileName:file.name
    }
  }
  
  upload(){
    const data = new FormData();
    data.append('usrimage',this.dataImg.fileRaw)

    this.api.postImages(data).subscribe((resposeFromTheServer)=>{
      let resposeLocal;
      resposeFromTheServer = resposeLocal
    
    })
  }

  guardar(){
    let dataRestaurant = {
      nameRestaurant: this.registerRestaurantForm.value.nameRestaurant,
      address: this.registerRestaurantForm.value.address,
      phone: this.registerRestaurantForm.value.phone,
      rType: this.registerRestaurantForm.value.rType,
      openLocal: this.registerRestaurantForm.value.openLocal,
      closeLocal: this.registerRestaurantForm.value.closeLocal,
      lat: this.registerRestaurantForm.value.lat,
      lng: this.registerRestaurantForm.value.lng,
      shortDescription:this.registerRestaurantForm.value.shortDescription,
      longDescription:this.registerRestaurantForm.value.longDescription,
      img: this.dataImg.fileName, 
    }
    this.api.restaurantPost(dataRestaurant).subscribe((responseFromTheServer)=>{
      let responseLocal;
      responseLocal=responseFromTheServer;
    })
    this.upload();
    this.registerRestaurantForm.reset();
  }
}