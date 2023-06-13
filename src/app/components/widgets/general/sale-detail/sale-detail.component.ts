import { Component } from '@angular/core';
import * as data from '../../../../shared/data/component/widget/general';

@Component({
  selector: 'app-sale-detail',
  templateUrl: './sale-detail.component.html',
  styleUrls: ['./sale-detail.component.scss'],
})
export class SaleDetailComponent {
  icon: any;
  // data
  public saleDetails = data.saleDetails;
}
