import { Component, OnInit } from '@angular/core';
import{RestApiService} from '../services/restapi.service';
import{Message} from '../Models/Message'
@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  constructor(private service: RestApiService) { }
message:any;
messageText:string;
  ngOnInit(): void {
  }
sendMessage(){
  const resp = this.service.sendMessage(this.messageText);

  return resp.subscribe((data) => this.message = data);
}
}