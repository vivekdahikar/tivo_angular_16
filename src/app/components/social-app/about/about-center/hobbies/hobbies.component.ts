import { Component } from '@angular/core';
import * as hobbiesData from '../../../../../shared/data/component/social-app/social-app';

@Component({
  selector: 'app-hobbies',
  templateUrl: './hobbies.component.html',
  styleUrls: ['./hobbies.component.scss'],
})
export class HobbiesComponent {
  public HobbiesData = hobbiesData.HobbiesData;
}
