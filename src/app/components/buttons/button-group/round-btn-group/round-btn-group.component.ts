import { Component } from '@angular/core';
import { buttonGroup } from '../../../../shared/data/component/button/button';

@Component({
  selector: 'app-round-btn-group',
  templateUrl: './round-btn-group.component.html',
  styleUrls: ['./round-btn-group.component.scss'],
})
export class RoundBtnGroupComponent {
  buttonSize = buttonGroup.buttonSize;
}
