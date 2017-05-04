import { Component, OnInit , Input } from '@angular/core';
import { Server } from '../data/server.model';
import { ServerDataService} from '../data/serversData.service';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'] 
})
export class ServersComponent implements OnInit { 
  @Input() servers: Server[];

  constructor(private serverDataService: ServerDataService) {     
    
   }

  ngOnInit()
  {
     this.servers = this.serverDataService.getServers();
  } 

  OnServerAdded( serverData : { Name: string , active: boolean, Desc: string}){  
   
    let newServer = new Server(this.servers.length + 1,serverData.Name, serverData.active, serverData.Desc)
    // this.servers.push({
    //   Id: this.servers.length + 1,
    //   Name: serverData.Name,
    //   IsActive: serverData.active,
    //   Description: serverData.Desc,
    //   DateCreated: new Date()
    // });
    this.serverDataService.addServer(newServer);
  }

  OnServerDeleted( data: {Id: number}){    
    let serverToDelete: Server = this.servers.find(s=>s.Id == data.Id);    
    let index: number = this.servers.indexOf(serverToDelete);    
    this.servers.splice(index,1);    
  }
}
