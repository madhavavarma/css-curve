import { Component, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { BaseWorkFlowTab } from './base-work-flow-tab';

@Component({
  selector: 'app-apprl-work-flow',
  templateUrl: './apprl-work-flow.component.html',
  styleUrls: ['./apprl-work-flow.component.css']
})
export class ApprlWorkFlowComponent {

  @ViewChild('dailyLimitElement') dailyLimitElement: BaseWorkFlowTab;

  formGroup: FormGroup = this.formBuilder.group({
    approveTransaction: new FormControl(false),
    dailyLimit: new FormControl(),
    isUnlimitedLimit: new FormControl(false),

    OTL1Amount: new FormControl(),
    isOTL1UnlimitedLimit: new FormControl(false),

    OTL2Amount: new FormControl(),
    isOTL2UnlimitedLimit: new FormControl(false),

    RL1Amount: new FormControl(),
    isRL1UnlimitedLimit: new FormControl(false),

    RL2Amount: new FormControl(),
    isRL2UnlimitedLimit: new FormControl(false)
  });

  constructor(private formBuilder: FormBuilder) {}
}
