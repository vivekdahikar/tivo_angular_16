import { Component } from '@angular/core';
import * as chartData from '../../../../shared/data/component/widget/chart';

@Component({
  selector: 'app-expense',
  templateUrl: './expense.component.html',
  styleUrls: ['./expense.component.scss'],
})
export class ExpenseComponent {
  public expensechart = chartData.expensechart;
}
