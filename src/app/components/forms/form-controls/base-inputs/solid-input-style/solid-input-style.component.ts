import { Component } from '@angular/core';

@Component({
  selector: 'app-solid-input-style',
  templateUrl: './solid-input-style.component.html',
  styleUrls: ['./solid-input-style.component.scss']
})
export class SolidInputStyleComponent {
  selectedIds: string[] | any;
  selectedName = 'Vilnius';
  selectedId: number | any;
  selectedNumberIds: number[] | any;

  constructor() {}

  cities2 = [
    { id: 1, name: '1' },
    { id: 2, name: '2' },
    { id: 3, name: '3' },
    { id: 4, name: '4' },
    { id: 5, name: '5' },
  ];
  ngOnInit(): void {}
}
