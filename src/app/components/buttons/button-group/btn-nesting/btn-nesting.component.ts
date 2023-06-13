import { Component } from '@angular/core';

@Component({
  selector: 'app-btn-nesting',
  templateUrl: './btn-nesting.component.html',
  styleUrls: ['./btn-nesting.component.scss'],
})
export class BtnNestingComponent {
  show: any;
  openMenu() {
    this.show = !this.show;
  }
}
