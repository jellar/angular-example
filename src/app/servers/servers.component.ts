import { Component, OnInit } from '@angular/core';
import { Server } from '../server/server.model';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'] 
})
export class ServersComponent implements OnInit { 
  servers: Server[] = [
    new Server(1,'Server 1', true, 'Server 1 Description'),
    new Server(2,'Server 2', false, 'Server 2 Description')
  ];

  constructor() {     
    
   }

  ngOnInit() {
  } 

  OnServerAdded( serverData : { Name: string , active: boolean, Desc: string}){  
   
    this.servers.push({
      Id: this.servers.length + 1,
      Name: serverData.Name,
      IsActive: serverData.active,
      Description: serverData.Desc,
      DateCreated: new Date()
    });
  }

  OnServerDeleted( data: {Id: number}){    
    let serverToDelete: Server = this.servers.find(s=>s.Id == data.Id);    
    let index: number = this.servers.indexOf(serverToDelete);    
    this.servers.splice(index,1);    
  }
}
