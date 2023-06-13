import { Component } from '@angular/core';
import * as chartData from '../../../../shared/data/component/widget/chart';

@Component({
  selector: 'app-live-product',
  templateUrl: './live-product.component.html',
  styleUrls: ['./live-product.component.scss'],
})
export class LiveProductComponent {
  public liveproduct = chartData.liveproduct;
}
