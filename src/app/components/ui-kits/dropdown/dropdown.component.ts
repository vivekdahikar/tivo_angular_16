import { Component } from '@angular/core';
import * as data from '../../../shared/data/component/ui-kits/dropdown';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
})
export class DropdownComponent {
  public basicColorDropdown = data.basicColorDropdown;
}
