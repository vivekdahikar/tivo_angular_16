import { Component } from '@angular/core';
import * as chatData from '../../../shared/data/component/chat/chat';

@Component({
  selector: 'app-chat-menu',
  templateUrl: './chat-menu.component.html',
  styleUrls: ['./chat-menu.component.scss'],
})
export class ChatMenuComponent {
  public openTab: string = 'call';

  // data
  public calls = chatData.ChatDB.call;

  constructor() {}

  public tabbed(val: string) {
    this.openTab = val;
  }

  ngOnInit(): void {}
}
