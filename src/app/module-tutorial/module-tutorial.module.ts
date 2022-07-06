import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModuleComponentComponent } from './module-component/module-component.component';



@NgModule({
  declarations: [
    ModuleComponentComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ModuleComponentComponent
  ]
})
export class ModuleTutorialModule { }
