import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat-inbox',
  templateUrl: './chat-inbox.component.html',
  styleUrls: ['./chat-inbox.component.css']
})
export class ChatInboxComponent implements OnInit {

  messageSend: string;

  constructor() {
  }

  ngOnInit(): void {
  }

  receiveMessage($event) {
    this.messageSend = $event
  }
}
