import { Component } from '@angular/core';
import * as data from '../../../shared/data/component/ui-kits/alert';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss'],
})
export class AlertComponent {
  public colorAlert = data.colorAlert;
  public colorAlertLight = data.colorAlertLight;
}
