import { Component } from '@angular/core';
import * as chartData from '../../../../shared/data/component/dashboard/default/default';

@Component({
  selector: 'app-our-total-users',
  templateUrl: './our-total-users.component.html',
  styleUrls: ['./our-total-users.component.scss'],
})
export class OurTotalUsersComponent {
  public userchart = chartData.userchart;
}
