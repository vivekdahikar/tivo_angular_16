import { Component } from '@angular/core';
import * as chartData from '../../../../shared/data/component/widget/chart';

@Component({
  selector: 'app-monthly-sale',
  templateUrl: './monthly-sale.component.html',
  styleUrls: ['./monthly-sale.component.scss'],
})
export class MonthlySaleComponent {
  public monthly = chartData.MonthlySale;
}
