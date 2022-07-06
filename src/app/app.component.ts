import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tutorial';
  dataValue='empty'

  userDetails = [
    {  name:"kunal", email:"kunaly1038@gmail.com"  },
    {  name:"bhaskar", email:"bhaskar@gmail.com"  },
    {  name:"om", email:"omparkash@gmail.com"  },
    {  name:"gaurav", email:"gaurav@gmail.com"  },
  ]

  data :number= 0;
  randomNumber(){
    this.data = (Math.random()*10)%10
  }

  updateValue(item:string){
    this.dataValue = item;
    console.warn(item)
  }

  
}
