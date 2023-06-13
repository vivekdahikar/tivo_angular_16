import { Component } from '@angular/core';
import { buttonGroup } from '../../../../shared/data/component/button/button';

@Component({
  selector: 'app-square-btn-group',
  templateUrl: './square-btn-group.component.html',
  styleUrls: ['./square-btn-group.component.scss'],
})
export class SquareBtnGroupComponent {
  groupBtn = buttonGroup.buttonsGroup;
}
