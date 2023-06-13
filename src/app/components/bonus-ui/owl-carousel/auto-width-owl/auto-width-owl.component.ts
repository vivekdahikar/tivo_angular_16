import { Component } from '@angular/core';
import * as data from '../../../../shared/data/component/bonus-ui/owl-crousel';

@Component({
  selector: 'app-auto-width-owl',
  templateUrl: './auto-width-owl.component.html',
  styleUrls: ['./auto-width-owl.component.scss'],
})
export class AutoWidthOwlComponent {
  public owlcarousel5ptions = data?.owlcarousel5ptions;
  public owlcarousel1 = data?.owlcarousel1;
}
