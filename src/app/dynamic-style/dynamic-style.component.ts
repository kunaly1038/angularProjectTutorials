import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dynamic-style',
  templateUrl: './dynamic-style.component.html',
  styleUrls: ['./dynamic-style.component.scss']
})
export class DynamicStyleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  textColor= 'green';
  bgColor='red';

  changeThings(){
    this.textColor='red';
   this.bgColor= 'blue'
  }
}
