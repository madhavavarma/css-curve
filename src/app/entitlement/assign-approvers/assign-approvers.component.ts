import { Component, OnInit } from '@angular/core';
import { BaseWorkFlowTab } from '../apprl-work-flow/base-work-flow-tab';

@Component({
  selector: 'app-assign-approvers',
  templateUrl: './assign-approvers.component.html',
  styleUrls: ['./assign-approvers.component.css']
})
export class AssignApproversComponent extends BaseWorkFlowTab {

  constructor() { 
    super({tabNo: 3, headerText: 'Assign approvers for each level sigining limits'});
  }

}
