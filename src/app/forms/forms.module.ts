import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsRoutingModule } from './forms-routing.module';
import { MainComponent } from './main/main.component';
import { LoginFormComponent } from './login-form/login-form.component';


@NgModule({
  declarations: [MainComponent, LoginFormComponent],
  imports: [
    CommonModule,
    FormsRoutingModule
  ]
})
export class FormsModule { }
