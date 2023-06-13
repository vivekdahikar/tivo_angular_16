import { Component } from '@angular/core';
import * as data from '../../../../shared/data/component/bonus-ui/owl-crousel';

@Component({
  selector: 'app-auto-height-owl',
  templateUrl: './auto-height-owl.component.html',
  styleUrls: ['./auto-height-owl.component.scss'],
})
export class AutoHeightOwlComponent {
  public owlcarousel14ptions = data?.owlcarousel14ptions;
  public owlcarousel1 = data?.owlcarousel1;
}
