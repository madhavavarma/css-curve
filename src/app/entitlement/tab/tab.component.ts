import { Component, OnInit, Input } from '@angular/core';
import { TabData } from '../tab-data.interface';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css']
})
export class TabComponent {

  @Input() tabData: TabData;

  enable() {
    console.log('Tab enabled. Tab No' + this.tabData.tabNo);
  }

}
