import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-color-alerts',
  templateUrl: './color-alerts.component.html',
  styleUrls: ['./color-alerts.component.scss'],
})
export class ColorAlertsComponent {
  @Input() alert: any;
}
