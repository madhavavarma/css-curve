import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-input-unlimit-amt',
  templateUrl: './input-unlimit-amt.component.html',
  styleUrls: ['./input-unlimit-amt.component.css']
})
export class InputUnlimitAmtComponent implements OnInit  {
  ngOnInit(): void {
    this.isUnlimitedLimitCtrl
        .valueChanges
        .subscribe(isChecked => {
          console.log('checked');
          this.amountCtrl.setValue(isChecked ? this.maxAmount : null) 
        });
  }

  @Input() formGroup: FormGroup;
  @Input() amountFormControlName: string;
  @Input() unlimitFormControlName: string;
  @Input() maxAmount: number;
  @Input() minAmount: number;

  get isUnlimitedLimitCtrl() {
    return this.formGroup.controls[this.unlimitFormControlName];
  }

  get isUnlimitedLimit(): boolean {
    return this.isUnlimitedLimitCtrl.value;
  }

  get amountCtrl() {
    return this.formGroup.controls[this.amountFormControlName];
  }

  get amount(): boolean {
    return this.amountCtrl.value;
  }

}
