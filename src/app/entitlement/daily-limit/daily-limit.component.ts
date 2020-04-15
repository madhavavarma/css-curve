import { Component, OnInit, Input } from '@angular/core';
import { TabData } from '../tab-data.interface';
import { ApprovalWorkFlow } from '../approval-work-flow.interface';
import { FormGroup } from '@angular/forms';
import { BaseWorkFlowTab } from '../apprl-work-flow/base-work-flow-tab';

@Component({
  selector: 'app-daily-limit',
  templateUrl: './daily-limit.component.html',
  styleUrls: ['./daily-limit.component.css']
})
export class DailyLimitComponent extends BaseWorkFlowTab {

  unlimitedAmount = 999999999;

  constructor() { 
    super({tabNo: 2, headerText: 'Add the daily entitlements limits for the account'});
  }
}
