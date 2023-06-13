import { Component } from '@angular/core';

@Component({
  selector: 'app-login-image-two',
  templateUrl: './login-image-two.component.html',
  styleUrls: ['./login-image-two.component.scss'],
})
export class LoginImageTwoComponent {
  public show: boolean = false;

  constructor() {}

  ngOnInit(): void {}
  showPassword() {
    this.show = !this.show;
  }
}
