import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-parent-to-child',
  templateUrl: './parent-to-child.component.html',
  styleUrls: ['./parent-to-child.component.scss']
})
export class ParentToChildComponent implements OnInit {

  constructor() { }

  @Input() item: number = 0;
  @Input() parentData:{name:string, email:string}={name:'', email:''} ;
@Input() parentDataValue:{};
  ngOnInit(): void {
  }

}
