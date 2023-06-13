import { Component } from '@angular/core';
import * as typographyData from '../../../shared/data/component/typography/typography';

@Component({
  selector: 'app-typography',
  templateUrl: './typography.component.html',
  styleUrls: ['./typography.component.scss'],
})
export class TypographyComponent {
  dd: string = 'Lorem ipsum dolor sit amet';
  index = 10;
  public typography = typographyData.typography;
  public textColor = typographyData.textColor;
}
