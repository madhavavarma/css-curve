import { Input, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { TabData } from '../tab-data.interface';
import { TabComponent } from '../tab/tab.component';

export class BaseWorkFlowTab {

    @ViewChild('tab') tab: TabComponent;
    @Input() formGroup: FormGroup;
    @Input() nextElement: BaseWorkFlowTab;

    tabData: TabData;

    get controls() {
        return this.formGroup.controls;
    }

    get approveTransactionCtrl() {
        return this.controls.approveTransaction
    }

    get approveTransaction() {
        return this.approveTransactionCtrl.value;
    }

    get isUnlimitedLimitCtrl() {
        return this.controls.isUnlimitedLimit;
    }

    get isUnlimitedLimit() {
        return this.isUnlimitedLimitCtrl.value;
    }

    get dailyLimitCtrl() {
        return this.controls.dailyLimit
    }

    get dailyLimit() {
        return this.dailyLimitCtrl.value;
    }

    constructor(tabData: TabData) {
        this.tabData = tabData;
    }

    enable = () => { console.log(this.formGroup.value); this.tab.enable() };
}