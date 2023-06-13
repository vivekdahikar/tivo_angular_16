import { Component } from '@angular/core';
import * as cardData from '../../../shared/data/component/bonus-ui/bonus-ui';

@Component({
  selector: 'app-basic-card',
  templateUrl: './basic-card.component.html',
  styleUrls: ['./basic-card.component.scss'],
})
export class BasicCardComponent {
  textColor: any;
  public cards = cardData.cards;
}
