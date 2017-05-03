import { Component, OnInit , Output, EventEmitter } from '@angular/core';
import { Server } from '../server/server.model';

@Component({
  selector: 'app-server-form',
  templateUrl: './server-form.component.html',
  styleUrls: ['./server-form.component.css']
})
export class ServerFormComponent implements OnInit {
  @Output() ServerCreated = new EventEmitter<{ Name: string , active: boolean, Desc: string}>();
  model = new Server(10, '', false, '');
  allowNewServer = false;
  serverName = "";
  serverDesc= "";
  isActive: false;
  isServerCreated = false;

  constructor() { 
    setInterval(()=>{
      this.allowNewServer = true;
    },2000);    
   }

  ngOnInit() {
  }    
  onSubmit(){
    this.isServerCreated = true;
    this.ServerCreated.emit({ Name: this.model.Name, Desc: this.model.Description, active: this.model.IsActive})
  } 
}
