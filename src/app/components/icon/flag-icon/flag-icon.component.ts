import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import * as iconData from '../../../shared/data/component/icon/flag';

@Component({
  selector: 'app-flag-icon',
  templateUrl: './flag-icon.component.html',
  styleUrls: ['./flag-icon.component.scss'],
})
export class FlagIconComponent {
  public detail: boolean = false;
  public flag: string | any;
  public val: string | any;
  public icon = iconData.icon;
  constructor(public toastrService: ToastrService) {}

  toggleWithInfo(icon: string) {
    this.detail = true;
    this.flag = icon;
    this.val = '<i class="flag-icon flag-icon-' + icon + '"></i>';
  }
  copyText(val: string) {
    let selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = '<i class="flag-icon flag-icon-' + val + '"></i>';
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
    this.toastrService.show(
      '<p class="mb-0 mt-1">Code Copied to clipboard</p>',
      '',
      {
        closeButton: true,
        enableHtml: true,
        positionClass: 'toast-bottom-right',
      }
    );
  }
  ngOnInit(): void {}
}
