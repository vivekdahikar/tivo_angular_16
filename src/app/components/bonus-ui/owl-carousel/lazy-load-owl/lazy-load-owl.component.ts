import { Component } from '@angular/core';
import * as data from '../../../../shared/data/component/bonus-ui/owl-crousel';

@Component({
  selector: 'app-lazy-load-owl',
  templateUrl: './lazy-load-owl.component.html',
  styleUrls: ['./lazy-load-owl.component.scss'],
})
export class LazyLoadOwlComponent {
  public owlcarousel10ptions = data?.owlcarousel10ptions;
  public owlcarousel1 = data?.owlcarousel1;
}
