import { Component } from '@angular/core';
import * as generalData from '../../../shared/data/component/widget/general';

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.scss'],
})
export class GeneralComponent {
  public earnings = generalData.earnings;
  public products = generalData.products;
  public messages = generalData.messages;
  public newUser = generalData.newUser;

  public Facebook = generalData.Facebook;
  public Linkedin = generalData.Linkedin;
  public Twitter = generalData.Twitter;
  public Instagram = generalData.Instagram;
}
