import { Component } from '@angular/core';

@Component({
  selector: 'app-mail-filter',
  templateUrl: './mail-filter.component.html',
  styleUrls: ['./mail-filter.component.scss'],
})
export class MailFilterComponent {
  public open: boolean = false;
  constructor() {}

  openMenu() {
    this.open = !this.open;
  }
}
