import { Component } from '@angular/core';
import * as data from '../../../../../shared/data/component/table/tableData';

@Component({
  selector: 'app-text-bg-utilities',
  templateUrl: './text-bg-utilities.component.html',
  styleUrls: ['./text-bg-utilities.component.scss'],
})
export class TextBgUtilitiesComponent {
  public textOrBgUtilities = data.textOrBgUtilities;
}
