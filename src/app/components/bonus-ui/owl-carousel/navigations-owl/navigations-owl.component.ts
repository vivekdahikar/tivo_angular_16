import { Component } from '@angular/core';
import * as data from '../../../../shared/data/component/bonus-ui/owl-crousel';

@Component({
  selector: 'app-navigations-owl',
  templateUrl: './navigations-owl.component.html',
  styleUrls: ['./navigations-owl.component.scss'],
})
export class NavigationsOwlComponent {
  public owlcarousel6ptions = data?.owlcarousel6ptions;
  public owlcarousel1 = data?.owlcarousel1;
}
