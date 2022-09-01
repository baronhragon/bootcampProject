import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  formularioMenuSection: FormGroup;

  constructor(public fb: FormBuilder) { 
    this.formularioMenuSection = new FormGroup({
      sectionName: new FormControl(''),
    });
  }

  guardar() {
    let f = this.formularioMenuSection.value;
    let section = {
      sectionName: f.sectionName,
    }

    console.log(section.sectionName);

    var text = section.sectionName;
    text = document.getElementById('sections-container')?.innerHTML;
  }



  ngOnInit(): void {
  }

}
