import { Component } from '@angular/core';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss'],
})
export class ForgetPasswordComponent {
  public show: boolean = false;

  constructor() {}

  ngOnInit(): void {}
  showPassword() {
    this.show = !this.show;
  }
}
