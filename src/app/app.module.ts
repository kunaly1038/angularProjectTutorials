import { NgModule } from '@angular/core';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InterpolationTutorialComponent } from './component/interpolation-tutorial/interpolation-tutorial.component';
import { ModuleTutorialModule } from './module-tutorial/module-tutorial.module';
import { FunctionTutorialComponent } from './function-tutorial/function-tutorial.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { IfElseTutorialsComponent } from './if-else-tutorials/if-else-tutorials.component';
import { SwitchTutorialsComponent } from './switch-tutorials/switch-tutorials.component';
import { DynamicStyleComponent } from './dynamic-style/dynamic-style.component';
import { ToggleElementComponent } from './toggle-element/toggle-element.component';
import { ParentToChildComponent } from './parent-to-child/parent-to-child.component';
import { ChildToParentComponent } from './child-to-parent/child-to-parent.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { PipesTutorialsComponent } from './pipes-tutorials/pipes-tutorials.component';
import { UsdInrPipe } from './pipes/usd-inr.pipe';
import { TemplateDrivenTutorialComponent } from './template-driven-tutorial/template-driven-tutorial.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { ReactiveValidationComponent } from './reactive-validation/reactive-validation.component';
import { RedElDirectiveDirective } from './red-el-directive.directive';
import { DirectiveTutComponent } from './directive-tut/directive-tut.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    InterpolationTutorialComponent,
    FunctionTutorialComponent,
    PropertyBindingComponent,
    IfElseTutorialsComponent,
    SwitchTutorialsComponent,
    DynamicStyleComponent,
    ToggleElementComponent,
    ParentToChildComponent,
    ChildToParentComponent,
    TwoWayBindingComponent,
    PipesTutorialsComponent,
    UsdInrPipe,
    TemplateDrivenTutorialComponent,
    ReactiveFormComponent,
    ReactiveValidationComponent,
    RedElDirectiveDirective,
    DirectiveTutComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ModuleTutorialModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
