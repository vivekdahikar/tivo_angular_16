import { Component } from '@angular/core';

@Component({
  selector: 'app-select2',
  templateUrl: './select2.component.html',
  styleUrls: ['./select2.component.scss'],
})
export class Select2Component {
  selectedCity: any;
  selectedCityIds: string[] | any;
  selectedCityIds2: string[] | any;
  selectedCityIds3: string[] | any;
  selectedCityIds4: string[] | any;
  selectedCityIds5: string[] | any;
  selectedCityIds6: string[] | any;
  selectedCityName = 'Vilnius';
  selectedCityId: number | any;
  selectedUserIds: number[] | any;

  store: boolean = true;
  constructor() {}

  ngOnInit(): void {}
  cities = [
    { id: 1, name: 'Vilnius' },
    { id: 2, name: 'Kaunas' },
    { id: 3, name: 'Pavilnys', disabled: true },
    { id: 4, name: 'Pabradė' },
    { id: 5, name: 'Klaipėda' },
  ];

  Placeholder = [
    { id: 1, name: 'Alabama' },
    { id: 2, name: 'Wyoming' },
    { id: 3, name: 'Coming' },
    { id: 4, name: 'Hanry Die' },
    { id: 4, name: 'John Deo' },
  ];

  Placeh = [
    { id: 1, name: 'Alabama' },
    { id: 2, name: 'Wyoming' },
    { id: 3, name: 'Coming' },
    { id: 4, name: 'Hanry Die' },
    { id: 4, name: 'John Deo' },
  ];

  Enable(val: any) {
    this.store = val;
  }
}
