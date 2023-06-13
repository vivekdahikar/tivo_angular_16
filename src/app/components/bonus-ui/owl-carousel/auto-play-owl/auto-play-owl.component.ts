import { Component } from '@angular/core';
import * as data from '../../../../shared/data/component/bonus-ui/owl-crousel';

@Component({
  selector: 'app-auto-play-owl',
  templateUrl: './auto-play-owl.component.html',
  styleUrls: ['./auto-play-owl.component.scss'],
})
export class AutoPlayOwlComponent {
  public owlcarousel12ptions = data?.owlcarousel12ptions;
  public owlcarousel1 = data?.owlcarousel1;
}
