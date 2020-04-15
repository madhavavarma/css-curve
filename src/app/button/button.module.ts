import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AletComponent } from './alet/alet.component';
import { MainComponent } from './main/main.component';
import { ButtonRoutingModule } from './button.routing';
import { OutlineComponent } from './outline/outline.component';
import { SplitBtnDdComponent } from './split-btn-dd/split-btn-dd.component';
import { AnimatedComponent } from './animated/animated.component';



@NgModule({
  declarations: [AletComponent, MainComponent, OutlineComponent, SplitBtnDdComponent, AnimatedComponent],
  imports: [
    CommonModule,
    ButtonRoutingModule
  ]
})
export class ButtonModule { }
