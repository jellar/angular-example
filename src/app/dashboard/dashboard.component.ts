import { Component, OnInit, Input } from '@angular/core';
import { Server } from '../data/server.model';
import { ServerDataService} from '../data/serversData.service';

@Component({
    selector : 'app-dashboard',
    templateUrl: './dashboard.component.html'
})

export class DashboardComponent implements OnInit{
    @Input() servers: Server[]
    noOfActiveServers:number;

    constructor(private serverDataService: ServerDataService){

    }

    getActiveServers(){        
        return this.servers.filter(s=>s.IsActive === true).length;
    }

    getInActiveServers(){        
        return this.servers.filter(s=>s.IsActive === false).length;
    }
    

    ngOnInit(){        
        this.servers = this.serverDataService.getServers();
    }
}