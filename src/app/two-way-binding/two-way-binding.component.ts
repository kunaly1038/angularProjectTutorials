import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-way-binding',
  templateUrl: './two-way-binding.component.html',
  styleUrls: ['./two-way-binding.component.scss']
})
export class TwoWayBindingComponent implements OnInit {

  constructor() { }
  name:any=null;
  name2:any=null;

  ngOnInit(): void {
  }

  displayText = null;

  displayValue(){
    this.displayText = this.name2

  }

}
