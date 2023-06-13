import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-common-profile-card',
  templateUrl: './common-profile-card.component.html',
  styleUrls: ['./common-profile-card.component.scss'],
})
export class CommonProfileCardComponent {
  @Input() data: any;
}
