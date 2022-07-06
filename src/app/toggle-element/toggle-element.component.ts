import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toggle-element',
  templateUrl: './toggle-element.component.html',
  styleUrls: ['./toggle-element.component.scss']
})
export class ToggleElementComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  display = false
  toggleElement(){
this.display=!this.display;
  }
}
