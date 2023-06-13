import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { allIcon } from '../../../shared/data/component/icon/thimigy';

@Component({
  selector: 'app-thimify-icon',
  templateUrl: './thimify-icon.component.html',
  styleUrls: ['./thimify-icon.component.scss'],
})
export class ThimifyIconComponent {
  public detail: boolean = false;
  public icon: string | any;
  public val: string | any;

  public allIconData = allIcon.themify;

  constructor(public toastrService: ToastrService) {}

  toggleWithInfo(icon: string) {
    this.detail = true;
    this.icon = icon;
    this.val = '<i class="' + icon + '"></i>';
  }
  copyText(val: string) {
    let selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = '<i class="' + val + '"></i>';
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
