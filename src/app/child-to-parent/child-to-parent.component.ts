import { NONE_TYPE } from '@angular/compiler';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child-to-parent',
  templateUrl: './child-to-parent.component.html',
  styleUrls: ['./child-to-parent.component.scss']
})
export class ChildToParentComponent implements OnInit {

  @Output() updateDataEvent = new EventEmitter<string>();
  constructor() { }
ngOnInit(): void {
  }





}
