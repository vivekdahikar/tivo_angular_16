import { Component } from '@angular/core';
import * as data from '../../../../shared/data/component/bonus-ui/owl-crousel';

@Component({
  selector: 'app-stage-padding-owl',
  templateUrl: './stage-padding-owl.component.html',
  styleUrls: ['./stage-padding-owl.component.scss'],
})
export class StagePaddingOwlComponent {
  public owlcarousel8ptions = data?.owlcarousel8ptions;
  public owlcarousel1 = data?.owlcarousel1;
}
