import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-validation',
  templateUrl: './reactive-validation.component.html',
  styleUrls: ['./reactive-validation.component.scss']
})
export class ReactiveValidationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  loginForm= new FormGroup({
    user: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.minLength(10)])
  });

  name = null;
  password = null;

  loginUser(){
    this.name = this.loginForm.value.user;
    this.password = this.loginForm.value.password;
  }

  get userValidate(){
      return this.loginForm.get('user');
  }

  get passwordValidate(){
    return this.loginForm.get('password')
  }
}
