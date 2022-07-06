import { style } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-function-tutorial',
  templateUrl: './function-tutorial.component.html',
  styleUrls: ['./function-tutorial.component.scss']
})
export class FunctionTutorialComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  alertMessageOnClick(){
    alert('this is an alert message when you click on the button')
  }

  additionNumber(first, second){
    alert(parseInt(first)+parseInt(second));
  }

  keyupValue(value){
    console.table(value)
  }

  textColor = null;
  hoverover(){
    this.textColor = 'red';
    console.log("test")
  }
}
