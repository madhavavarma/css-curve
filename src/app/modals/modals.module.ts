import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { ModalsRoutingModule } from './modals-routing.module';
import { SimpleComponent } from './simple/simple.component';



@NgModule({
  declarations: [MainComponent, SimpleComponent],
  imports: [
    CommonModule,
    ModalsRoutingModule
  ]
})
export class ModalsModule { }
