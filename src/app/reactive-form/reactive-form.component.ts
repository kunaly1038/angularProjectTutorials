import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  formValue:any= null;

  loginForm = new FormGroup({
    user:new FormControl(''),
    password:new FormControl('')
  });

  loginUser(){
    console.warn(this.loginForm.value)
    this.formValue= this.loginForm.value.user;
  }
}
