import { Component } from '@angular/core';
import { BaseWorkFlowTab } from '../apprl-work-flow/base-work-flow-tab';

@Component({
  selector: 'app-appr-transaction',
  templateUrl: './appr-transaction.component.html',
  styleUrls: ['./appr-transaction.component.css']
})
export class ApprTransactionComponent extends BaseWorkFlowTab {

  constructor() {
    super({tabNo: 1, headerText: 'Allow the users to approve the transactions'});
  }
}
