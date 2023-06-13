import { Component } from '@angular/core';

@Component({
  selector: 'app-size-image',
  templateUrl: './size-image.component.html',
  styleUrls: ['./size-image.component.scss'],
})
export class SizeImageComponent {
  files2: File[] = [];

  constructor() {}

  onSelect2(event: any) {
    this.files2.push(...event.addedFiles);
  }

  onRemove2(event: any) {
    this.files2.splice(this.files2.indexOf(event), 1);
  }
  ngOnInit(): void {}
}
