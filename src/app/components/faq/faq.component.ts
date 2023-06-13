import { Component } from '@angular/core';
import * as faq from '../../shared/data/component/faq/faq';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss'],
})
export class FaqComponent {
  public faqData = faq.faqData;
}
