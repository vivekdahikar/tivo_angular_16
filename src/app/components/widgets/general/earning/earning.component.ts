import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-earning',
  templateUrl: './earning.component.html',
  styleUrls: ['./earning.component.scss'],
})
export class EarningComponent {
  @Input() data: any;
}
