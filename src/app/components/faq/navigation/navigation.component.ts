import { Component } from '@angular/core';
import * as navig from '../../../shared/data/component/faq/faq';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent {
  public navigation = navig.navigation;
}
