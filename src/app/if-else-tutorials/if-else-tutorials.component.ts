import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-if-else-tutorials',
  templateUrl: './if-else-tutorials.component.html',
  styleUrls: ['./if-else-tutorials.component.scss']
})
export class IfElseTutorialsComponent implements OnInit {

  constructor() { 
  }

  ngOnInit(): void {
  }
status : Boolean= false;
status2 : String= 'no';
colorType = 'green'
count = 0;
 singleClick(colorValue:string){
    if(colorValue==='red'){
      this.colorType='red';
    }
    else if(colorValue==='green'){
      this.colorType='green'
    }
    else if(colorValue==='blue'){
      this.colorType='blue'
    }
}




}
