import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChatRoutingModule } from './chat-routing.module';
import { ChatAppComponent } from './chat-app/chat-app.component';
import { ChatMenuComponent } from './chat-menu/chat-menu.component';
import { VideoChatComponent } from './video-chat/video-chat.component';
import { ChatsComponent } from './chat-app/chats/chats.component';
import { UsersChatsComponent } from './chat-app/users-chats/users-chats.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    ChatAppComponent,
    ChatMenuComponent,
    VideoChatComponent,
    ChatsComponent,
    UsersChatsComponent,
  ],
  imports: [CommonModule, ChatRoutingModule, SharedModule],
})
export class ChatModule {}
