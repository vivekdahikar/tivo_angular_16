import { Component } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
})
export class WelcomeComponent {
  time: any;
  temperature: any;
  conditions: any;

  constructor() {}

  ngOnInit() {
    setInterval(() => {
      this.time = new Date().toLocaleTimeString();
    }, 1000);
    // replace with API call to get weather data

    this.temperature = 28;
    this.conditions = 'Sunny';
  }
}
