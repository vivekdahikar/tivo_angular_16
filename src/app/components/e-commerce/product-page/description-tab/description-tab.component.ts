import { Component } from '@angular/core';

@Component({
  selector: 'app-description-tab',
  templateUrl: './description-tab.component.html',
  styleUrls: ['./description-tab.component.scss'],
})
export class DescriptionTabComponent {
  public openTab: string = 'febric';

  constructor() {}
  public tabbed(val: string) {
    this.openTab = val;
  }
}
