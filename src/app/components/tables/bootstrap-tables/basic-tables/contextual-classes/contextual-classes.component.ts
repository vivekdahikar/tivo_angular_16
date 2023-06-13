import { Component } from '@angular/core';
import * as data from '../../../../../shared/data/component/table/tableData';

@Component({
  selector: 'app-contextual-classes',
  templateUrl: './contextual-classes.component.html',
  styleUrls: ['./contextual-classes.component.scss'],
})
export class ContextualClassesComponent {
  public contextual = data.contextual;
}
