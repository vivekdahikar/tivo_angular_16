import { Component } from '@angular/core';
import * as email from '../../../shared/data/component/email/email';

@Component({
  selector: 'app-email-app',
  templateUrl: './email-app.component.html',
  styleUrls: ['./email-app.component.scss'],
})
export class EmailAppComponent {
  show = false;

  // data
  public emailData = email.emailData;

  constructor() {}

  // manu show
  openMenu() {
    this.show = !this.show;
  }

  ngOnInit(): void {}
}
