import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import * as uuid from 'uuid';
import * as SockJS from 'sockjs-client';
import { Stomp } from '@stomp/stompjs';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})

export class MessageComponent implements OnInit {

  public stompClient;
  public  msg = [];
  public myId: string;
  public recieveMessages = new Array<{id: number, text: string}> ();

  @Input() message: string;
  @Output() messageEvent = new EventEmitter<string>();

  constructor() {
    this.initializeWebSocketConnection();
  }

  ngOnInit() {
    this.myId = uuid.v4();
  }

  initializeWebSocketConnection() {
    const serverUrl = 'http://localhost:8080/chat';
    const ws = new SockJS(serverUrl);
    this.stompClient = Stomp.over(ws);
    const that = this;
    this.stompClient.connect({}, function(frame) {
      that.stompClient.subscribe('/topic/message', (message) => {
        if (message.body) {
          const messageBody = JSON. parse(message.body).content;
          const reciverId = JSON. parse(message.body).senderId;
          that.msg.push(message.body);
          if(that.myId !== reciverId){
          if (messageBody) {
            const recieveMessages = {id:1,text:messageBody};
            that.recieveMessages.push(recieveMessages);
            }
          }
        }
      });
    });
  }

  onSendMessage(){
    if (this.message) {
      this.sendMessage(this.message);
      const sendMessages = {id:0,text:this.message};
      this.recieveMessages.push(sendMessages);
      this.message = '';
      this.messageEvent.emit(this.message)
    }
  }

   sendMessage(message) {
    this.stompClient.send('/app/api' , {},  JSON.stringify({
      name : message,
      uid : this.myId
    }));
   }
}
