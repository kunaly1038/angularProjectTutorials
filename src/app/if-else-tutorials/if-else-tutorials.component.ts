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
status: Boolean=true;
status2 : String= 'no';
colorType = 'green'
count = 0;

changeStatus(){
  if(this.status){
    this.status= false;
  }else{
    this.status=true;
  }
}

changeStatus2(){
  if(this.status2=='no'){
    this.status2= 'yes';
  }else{
    this.status2='no';
  }
}

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
