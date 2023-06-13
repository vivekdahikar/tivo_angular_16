import { Component } from '@angular/core';
import * as data from '../../../../shared/data/component/bonus-ui/bonus-ui';

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.scss'],
})
export class ProfileCardComponent {
  public cardData1 = data.cardData1;
  public cardData2 = data.cardData2;
}
