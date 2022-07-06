import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-driven-tutorial',
  templateUrl: './template-driven-tutorial.component.html',
  styleUrls: ['./template-driven-tutorial.component.scss']
})
export class TemplateDrivenTutorialComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  name = null;
  password = null;
  userLogin(item:any){
    console.error(item.passowrd)
    this.name = item.name
    this.password = item.passowrd
  }
}
