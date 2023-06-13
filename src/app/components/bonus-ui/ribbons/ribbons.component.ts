import { Component } from '@angular/core';
import * as data from '../../../shared/data/component/bonus-ui/ribbons';

@Component({
  selector: 'app-ribbons',
  templateUrl: './ribbons.component.html',
  styleUrls: ['./ribbons.component.scss'],
})
export class RibbonsComponent {
  public ribbon = data.ribbons;
  public ribbonColor = data.ribbonColor;

  ribbonTop = ['primary', 'primary', 'primary'];
  constructor() {}

  ngOnInit(): void {}
}
