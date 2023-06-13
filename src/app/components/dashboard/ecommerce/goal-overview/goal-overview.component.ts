import { Component } from '@angular/core';
import * as chartData from '../../../../shared/data/component/dashboard/ecommerce/ecommerce';

@Component({
  selector: 'app-goal-overview',
  templateUrl: './goal-overview.component.html',
  styleUrls: ['./goal-overview.component.scss'],
})
export class GoalOverviewComponent {
  public goalchart = chartData.goalchart;
}
