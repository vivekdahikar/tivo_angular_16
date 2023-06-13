import { Component } from '@angular/core';

@Component({
  selector: 'app-social-app',
  templateUrl: './social-app.component.html',
  styleUrls: ['./social-app.component.scss'],
})
export class SocialAppComponent {
  active = 1;
  public openTab: string = 'timeline';

  constructor() {}

  public tabbed(val: string) {
    this.openTab = val;
  }
}
