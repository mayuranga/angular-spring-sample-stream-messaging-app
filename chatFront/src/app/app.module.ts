import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { InjectableRxStompConfig, RxStompService, rxStompServiceFactory } from '@stomp/ng2-stompjs';
import { MessageComponent } from './components/message/message.component';
import { ChatInboxComponent } from './components/chat-inbox/chat-inbox.component';


@NgModule({
  declarations: [
    AppComponent,
    MessageComponent,
    ChatInboxComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [{
    provide: InjectableRxStompConfig,
  },
  {
    provide: RxStompService,
    useFactory: rxStompServiceFactory,
    deps: [InjectableRxStompConfig],
  },],
  bootstrap: [AppComponent]
})
export class AppModule { }
