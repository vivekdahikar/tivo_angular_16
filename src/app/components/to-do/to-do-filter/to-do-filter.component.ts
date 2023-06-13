import { Component } from '@angular/core';

@Component({
  selector: 'app-to-do-filter',
  templateUrl: './to-do-filter.component.html',
  styleUrls: ['./to-do-filter.component.scss']
})
export class ToDoFilterComponent {
  public open = false;

  constructor() {}

  openMenu() {
    this.open = !this.open;
  }
  ngOnInit(): void {}
}
