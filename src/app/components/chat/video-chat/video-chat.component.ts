import { Component } from '@angular/core';

@Component({
  selector: 'app-video-chat',
  templateUrl: './video-chat.component.html',
  styleUrls: ['./video-chat.component.scss'],
})
export class VideoChatComponent {
  public openTab: string = 'call';
  show = false;
  active = 1;

  constructor() {}

  ngOnInit(): void {}

  openMenu() {
    this.show = !this.show;
  }

  public tabbed(val: string) {
    this.openTab = val;
  }
}
