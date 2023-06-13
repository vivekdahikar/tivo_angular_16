import { Component } from '@angular/core';
import * as viewed from '../../../../../shared/data/component/social-app/social-app';

@Component({
  selector: 'app-viewed-your-profile',
  templateUrl: './viewed-your-profile.component.html',
  styleUrls: ['./viewed-your-profile.component.scss'],
})
export class ViewedYourProfileComponent {
  public viewedProfile = viewed.viewedProfile;
}
