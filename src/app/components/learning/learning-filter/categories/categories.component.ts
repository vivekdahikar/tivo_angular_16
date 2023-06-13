import { Component } from '@angular/core';
import * as filterData from '../../../../shared/data/component/learning/learning';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent {
  public isCollapsed2 = false;
  public Categories = filterData.Categories;

  constructor() {}

  ngOnInit(): void {}
}
