import { Component } from '@angular/core';
import * as data from '../../../../shared/data/component/bonus-ui/owl-crousel';

@Component({
  selector: 'app-right-to-left-owl',
  templateUrl: './right-to-left-owl.component.html',
  styleUrls: ['./right-to-left-owl.component.scss'],
})
export class RightToLeftOwlComponent {
  public owlcarousel9ptions = data?.owlcarousel9ptions;
  public owlcarousel1 = data?.owlcarousel1;
}
