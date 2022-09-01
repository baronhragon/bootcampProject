
import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ApiService } from '../service.service';
import { DomSanitizer } from '@angular/platform-browser';



@Component({
  selector: 'app-registro-menu',
  templateUrl: './registro-menu.page.html',
  styleUrls: ['./registro-menu.page.scss'],
})

export class RegistroMenuPage implements OnInit {

  currentFood:number = undefined;
  public results = [];
  nameImg: string = "";
  dataImg: any;

  registerMenuForm: FormGroup;

  constructor(private api:ApiService, public formBuilder: FormBuilder,private _sanitizer: DomSanitizer ) {
    this.registerMenuForm = new FormGroup({
      nameProduct: new FormControl(),
      descriptionProduct: new FormControl(),
      price: new FormControl(),
      productType : new FormControl(),
     
    })
   }

  ngOnInit() {
    this.api.restaurantsGet().subscribe((responseFromTheServer) => {
      let responseLocal;
      responseLocal = responseFromTheServer;
      this.results = responseLocal.recordset;
    });
  }

  handleChange(ev) {
    console.log(ev);
    this.currentFood = ev.target.value.idRestaurant;
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
    let dataMenu = {
      nameProduct: this.registerMenuForm.value.nameProduct,
      descriptionProduct: this.registerMenuForm.value.descriptionProduct,
      price: this.registerMenuForm.value.price,
      productType: this.registerMenuForm.value.productType,
      img: this.dataImg.fileName, 
      idRestaurant:this.currentFood

      
    }
    this.api.menuPost(dataMenu).subscribe((responseFromTheServer)=>{
      let responseLocal;
      responseLocal=responseFromTheServer;
    })
     this.upload();
    this.registerMenuForm.reset();
  }
}