import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { EntitlementRoutingModule } from './entitlement-routing.module';
import { MainComponent } from './main/main.component';
import { ApprlWorkFlowComponent } from './apprl-work-flow/apprl-work-flow.component';
import { TabComponent } from './tab/tab.component';
import { ApprTransactionComponent } from './appr-transaction/appr-transaction.component';
import { DailyLimitComponent } from './daily-limit/daily-limit.component';
import { InputUnlimitAmtComponent } from './input-unlimit-amt/input-unlimit-amt.component';
import { AssignApproversComponent } from './assign-approvers/assign-approvers.component';



@NgModule({
  declarations: [MainComponent, ApprlWorkFlowComponent, TabComponent, ApprTransactionComponent, DailyLimitComponent, InputUnlimitAmtComponent, AssignApproversComponent],
  imports: [
    CommonModule,
    EntitlementRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class EntitlementModule { }
