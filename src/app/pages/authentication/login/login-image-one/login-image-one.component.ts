import { Component } from '@angular/core';

@Component({
  selector: 'app-login-image-one',
  templateUrl: './login-image-one.component.html',
  styleUrls: ['./login-image-one.component.scss'],
})
export class LoginImageOneComponent {
  public show: boolean = false;

  constructor() {}

  ngOnInit(): void {}
  showPassword() {
    this.show = !this.show;
  }
}
