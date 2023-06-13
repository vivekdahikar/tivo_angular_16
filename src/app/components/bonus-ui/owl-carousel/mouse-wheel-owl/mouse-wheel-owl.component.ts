import { Component } from '@angular/core';
import * as data from '../../../../shared/data/component/bonus-ui/owl-crousel';

@Component({
  selector: 'app-mouse-wheel-owl',
  templateUrl: './mouse-wheel-owl.component.html',
  styleUrls: ['./mouse-wheel-owl.component.scss'],
})
export class MouseWheelOwlComponent {
  public owlcarousel13ptions = data?.owlcarousel13ptions;
  public owlcarousel1 = data?.owlcarousel1;
}
