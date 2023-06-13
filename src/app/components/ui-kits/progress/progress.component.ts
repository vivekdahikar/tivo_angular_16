import { Component } from '@angular/core';
import * as data from '../../../shared/data/component/ui-kits/progress';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.scss'],
})
export class ProgressComponent {
  public largeProgressBars = data.largeProgressBars;
}
