import { Component } from '@angular/core';

@Component({
  selector: 'app-login-simple',
  templateUrl: './login-simple.component.html',
  styleUrls: ['./login-simple.component.scss'],
})
export class LoginSimpleComponent {
  public show: boolean = false;

  constructor() {}

  ngOnInit(): void {}
  showPassword() {
    this.show = !this.show;
  }
}
