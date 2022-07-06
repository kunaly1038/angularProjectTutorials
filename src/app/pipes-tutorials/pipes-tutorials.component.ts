import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes-tutorials',
  templateUrl: './pipes-tutorials.component.html',
  styleUrls: ['./pipes-tutorials.component.scss']
})
export class PipesTutorialsComponent implements OnInit {

  constructor() { }

  title = "this is pipe scene."

  jsonObject = {
    name:'kunal',
    email: 'kewkwe'
  }
  ngOnInit(): void {
  }

}
