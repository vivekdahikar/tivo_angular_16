import { Component } from '@angular/core';
import * as data from '../../../../shared/data/component/bonus-ui/owl-crousel';

@Component({
  selector: 'app-center-owl',
  templateUrl: './center-owl.component.html',
  styleUrls: ['./center-owl.component.scss'],
})
export class CenterOwlComponent {
  public owlcarousel3ptions = data?.owlcarousel3ptions;
  public owlcarousel1 = data?.owlcarousel1;
}
