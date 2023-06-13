import { Component } from '@angular/core';
import * as chartData from '../../../../shared/data/component/widget/chart';

@Component({
  selector: 'app-browser-uses',
  templateUrl: './browser-uses.component.html',
  styleUrls: ['./browser-uses.component.scss'],
})
export class BrowserUsesComponent {
  public browserUser = chartData.BrowserUses;
}
