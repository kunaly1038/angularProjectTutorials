import { Component, NgModule } from '@angular/core';
import { ChildActivationEnd, RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { InterpolationTutorialComponent } from './component/interpolation-tutorial/interpolation-tutorial.component';
import { DirectiveTutComponent } from './directive-tut/directive-tut.component';
import { DynamicStyleComponent } from './dynamic-style/dynamic-style.component';
import { FunctionTutorialComponent } from './function-tutorial/function-tutorial.component';
import { HomeComponent } from './home/home.component';
import { IfElseTutorialsComponent } from './if-else-tutorials/if-else-tutorials.component';
import { ModuleComponentComponent } from './module-tutorial/module-component/module-component.component';
import { PipesTutorialsComponent } from './pipes-tutorials/pipes-tutorials.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { ReactiveValidationComponent } from './reactive-validation/reactive-validation.component';
import { SwitchTutorialsComponent } from './switch-tutorials/switch-tutorials.component';
import { TemplateDrivenTutorialComponent } from './template-driven-tutorial/template-driven-tutorial.component';
import { ToggleElementComponent } from './toggle-element/toggle-element.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';

const routes: Routes = [
{
  component:InterpolationTutorialComponent,
  path:"interpoaltion"
},{
  component:HomeComponent,
  path:""
},{
  component:ModuleComponentComponent,
  path:"module"
},{
  component:FunctionTutorialComponent,
  path:"function"
},{
  component:PropertyBindingComponent,
  path:"protertyBinding"
},{
  component:IfElseTutorialsComponent,
  path:"ifElse"
},{
  component:SwitchTutorialsComponent,
  path:"switch"
},{
  component:DynamicStyleComponent,
  path:"dynamic"
},{
  component:ToggleElementComponent,
  path:"toggle"
},{
  component:TwoWayBindingComponent,
  path:"twoway"
},{
  component:PipesTutorialsComponent,
  path:"pipes"
},{
  component:ToggleElementComponent,
  path:"toggle"
},{
  component:TemplateDrivenTutorialComponent,
  path:"template"
},{
  component:ReactiveFormComponent,
  path:"reactive"
},{
  component:ReactiveValidationComponent,
  path:"reactiveValidate"
},{
  component:DirectiveTutComponent,
  path:"directive"
},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
