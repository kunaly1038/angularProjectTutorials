import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.scss']
})
export class PropertyBindingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  status = false;
  status2 = true;
  status3 = true;

  textDisplay;

}
