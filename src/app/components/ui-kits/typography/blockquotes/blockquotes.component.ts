import { Component } from '@angular/core';

import * as typographyData from '../../../../shared/data/component/typography/typography';

@Component({
  selector: 'app-blockquotes',
  templateUrl: './blockquotes.component.html',
  styleUrls: ['./blockquotes.component.scss'],
})
export class BlockquotesComponent {
  public blockquotes = typographyData.blockquotes;
}
