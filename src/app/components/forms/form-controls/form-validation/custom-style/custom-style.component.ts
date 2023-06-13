import { Component } from '@angular/core';

@Component({
  selector: 'app-custom-style',
  templateUrl: './custom-style.component.html',
  styleUrls: ['./custom-style.component.scss'],
})
export class CustomStyleComponent {
  public validate = false;
  public tooltipValidation = false;
  constructor() {}

  ngOnInit(): void {}
  public submit() {
    this.validate = !this.validate;
  }
  public tooltipSubmit() {
    this.tooltipValidation = !this.tooltipValidation;
  }
}
