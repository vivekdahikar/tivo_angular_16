import { Component } from '@angular/core';
import * as chartData from '../../../../shared/data/component/widget/chart';

@Component({
  selector: 'app-finance',
  templateUrl: './finance.component.html',
  styleUrls: ['./finance.component.scss'],
})
export class FinanceComponent {
  public widget11 = chartData.widget11;
}
