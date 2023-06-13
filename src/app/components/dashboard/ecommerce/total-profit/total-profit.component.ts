import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-total-profit',
  templateUrl: './total-profit.component.html',
  styleUrls: ['./total-profit.component.scss'],
})
export class TotalProfitComponent {
  @Input() data: any;
}
