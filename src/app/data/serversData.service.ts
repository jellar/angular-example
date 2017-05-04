import { Injectable } from '@angular/core';

import { Server } from '../data/server.model';

@Injectable()
export class ServerDataService{
    servers: Server[] = [
         new Server(1,'Server 1', true, 'Server 1 Description'),
            new Server(2,'Server 2', false, 'Server 2 Description')
    ];
    
    getServers(): Server[]{         
        return this.servers;   
    }

    addServer(data:Server){
        this.servers.push({
            Id: this.servers.length + 1,
            Name: data.Name,
            IsActive: data.IsActive,
            Description: data.Description,
            DateCreated: new Date()
        });
        console.log(this.servers.length);
    }
}