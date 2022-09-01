import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { ApiService } from '../service.service';
import { Address } from 'ngx-google-places-autocomplete/objects/address';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  formattedAddress='';
  public lat:any;
  public lng:any;
  logoImg: any;
  coverImg: any;
  dataImg: any;

  public handleAddressChange(address: Address) {
    this.formattedAddress = address.formatted_address;
    this.lat = address.geometry.location.lat();
    this.lng = address.geometry.location.lng();
    console.log(address.formatted_address);
    console.log(address.geometry.location.lat());
    console.log(address.geometry.location.lng());
  }
  
  registerRestaurantForm: FormGroup;
  constructor(private api:ApiService, public fb: FormBuilder) {
    this.registerRestaurantForm = new FormGroup({
      nameRestaurant:new FormControl('',Validators.required),
      address: new FormControl('',Validators.required),
      phone: new FormControl('',Validators.required),
      rType: new FormControl('',Validators.required),
      lat: new FormControl(),
      lng: new FormControl(),
      shortDescription: new FormControl(),
      longDescription: new FormControl(),
      openLocal: new FormControl(),
      closeLocal: new FormControl(),
      nombre: new FormControl('',Validators.required),
      password: new FormControl('',Validators.required),
      email: new FormControl('',Validators.email),
      confirmacionPassword: new FormControl('',Validators.required),
  })
}
  onFile(event: any): void {
    console.log(event);
    const [file] = event.target.files;
    this.logoImg = {
      fileRaw:file,
      fileName:file.name
    }
  }
  onFile2(event: any): void {
    console.log(event);
    const [file] = event.target.files;
    this.coverImg = {
      fileRaw:file,
      fileName:file.name
    }
  }
  upload(){
    const data = new FormData();
    data.append('usrimage',this.coverImg.fileRaw)
    this.api.postImages(data)?.subscribe((resposeFromTheServer:any)=>{
      let resposeLocal;
      resposeFromTheServer = resposeLocal
    })
    const data2 = new FormData();
    data.append('usrimage',this.logoImg.fileRaw)
    this.api.postImages(data2)?.subscribe((resposeFromTheServer:any)=>{
      let resposeLocal;
      resposeFromTheServer = resposeLocal
    })
  }
  guardar(){
    let f = this.registerRestaurantForm.value;
    let dataRes = {
      nameRestaurant: f.nombreRestaurant,
      address: this.formattedAddress,
      phone:f.phone,
      rType: f.rType,
      openLocal:f.openLocal,
      closeLocal:f.closeLocal,
      lat:this.lat,
      lng:this.lng,
      shortDescription:f.shortDescription,
      longDescription:f.longDescription,
      img:this.logoImg.fileName,
      imgCover:this.coverImg.fileName,
    }
    let dataReg = {
      nameRestaurant: f.nameRestaurant,
      password: f.password,
      address: f.address,
      email: f.email,
      phone: f.phone,
      confirmacionPassword: f.confirmacionPassword,
      type:'restaurant'
    }
    this.api.restaurantPost(dataRes)?.subscribe((responseFromTheServer:any)=>{
      let responseLocal;
      responseLocal = responseFromTheServer;
    })
    this.api.userPostRegister(dataReg)?.subscribe((responseFromTheServer:any)=>{
      let responseLocal;
      responseLocal = responseFromTheServer;
    })
    this.upload();
  }
  ngOnInit(): void {
  }
}
