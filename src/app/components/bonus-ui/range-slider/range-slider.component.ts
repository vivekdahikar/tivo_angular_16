import { Component } from '@angular/core';
import { Options } from 'ngx-slider-v2';

@Component({
  selector: 'app-range-slider',
  templateUrl: './range-slider.component.html',
  styleUrls: ['./range-slider.component.scss'],
})
export class RangeSliderComponent {
  value: number = 100;
  value2: number = 100;
  value3: number = 1000;
  options2Value: number = 5;
  maxvalue: number = 70;

  options: Options = {
    floor: 0,
    ceil: 200,
    getSelectionBarColor: (value: number): string => {
      return '#6362e7';
    },
    getPointerColor: (value: number): string => {
      return '#6362e7';
    },
  };

  options2: Options = {
    showTicksValues: true,
    stepsArray: [
      { value: 1, legend: 'Jan' },
      { value: 3, legend: 'Feb' },
      { value: 4, legend: 'Mar' },
      { value: 5, legend: 'Apr' },
      { value: 2, legend: 'May' },
      { value: 6, legend: 'Jun' },
      { value: 7, legend: 'Jul' },
      { value: 8, legend: 'Aug' },
      { value: 9, legend: 'Sept' },
      { value: 10, legend: 'Oct' },
      { value: 11, legend: 'Nov' },
      { value: 12, legend: 'Dec' },
    ],
    getSelectionBarColor: (value: number): string => {
      return '#6362e7';
    },
    getPointerColor: (value: number): string => {
      return '#6362e7';
    },
  };

  options3: Options = {
    floor: 1000,
    ceil: 10000,
    showTicksValues: true,
    tickStep: 3000,
    tickValueStep: 100,
    getSelectionBarColor: (value: number): string => {
      return '#6362e7';
    },
    getPointerColor: (value: number): string => {
      return '#6362e7';
    },
  };

  options4: Options = {
    floor: 0,
    ceil: 200,
    disabled: true,
    getPointerColor: (value: number): string => {
      return '#6362e7';
    },
  };
  constructor() {}

  ngOnInit(): void {}
}
