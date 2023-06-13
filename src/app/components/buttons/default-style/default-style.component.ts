import { Component } from '@angular/core';
import { buttons } from '../../../shared/data/component/button/button';

@Component({
  selector: 'app-default-style',
  templateUrl: './default-style.component.html',
  styleUrls: ['./default-style.component.scss'],
})
export class DefaultStyleComponent {
  buttons = buttons.defaultButtons;
  buttonsOnline = buttons.buttonOnline;
  constructor() {}
}
