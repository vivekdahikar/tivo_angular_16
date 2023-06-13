import { Component } from '@angular/core';

@Component({
  selector: 'app-register-simple',
  templateUrl: './register-simple.component.html',
  styleUrls: ['./register-simple.component.scss'],
})
export class RegisterSimpleComponent {
  public show: boolean = false;

  constructor() {}

  ngOnInit(): void {}
  showPassword() {
    this.show = !this.show;
  }
}
