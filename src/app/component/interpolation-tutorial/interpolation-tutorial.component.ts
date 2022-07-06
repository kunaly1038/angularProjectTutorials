import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interpolation-tutorial',
  templateUrl: './interpolation-tutorial.component.html',
  styleUrls: ['./interpolation-tutorial.component.scss']
})
export class InterpolationTutorialComponent implements OnInit {

  first :number = null;
  second :number= null;
  constructor() { }

  ngOnInit(): void {
  }

  additionInterpolation(){
    return this.first * this.second;
  }

}
