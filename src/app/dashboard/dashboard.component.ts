import { Component, OnInit, Input } from '@angular/core';
import { Server } from '../data/server.model';
import { ServerDataService} from '../data/serversData.service';
import { Http, Headers, RequestOptions, Response,RequestMethod } from '@angular/http';
import 'rxjs/add/operator/map'; 
import { AuthenticationService } from '../auth/authentication.service';
import { AuthHttp, JwtHelper} from 'angular2-jwt';

@Component({
    selector : 'app-dashboard',
    templateUrl: './dashboard.component.html'
})

export class DashboardComponent implements OnInit{
    @Input() servers: Server[]
    noOfActiveServers:number;
    companies = [];
    jwtHelper = new JwtHelper();
    constructor(
        private serverDataService: ServerDataService,
        private http: Http,
        private authenticationService : AuthenticationService,
        private authHttp: AuthHttp){

         }

    getActiveServers(){        
        return this.servers.filter(s=>s.IsActive === true).length;
    }

    getInActiveServers(){        
        return this.servers.filter(s=>s.IsActive === false).length;
    }
    

    ngOnInit(){        
        this.servers = this.serverDataService.getServers();
        this.getCompanies();
    }

    getCompanies(){
        if (localStorage.getItem('currentUser')) {
            // print the decoded JWT token for further development works
            var token = localStorage.getItem('currentUser');
                console.log(
                this.jwtHelper.decodeToken(token).userId,
                this.jwtHelper.getTokenExpirationDate(token),
                this.jwtHelper.isTokenExpired(token)
              );            
        }
        //  // add authorization header with jwt token
        // let headers = new Headers({ 'Authorization': 'Bearer ' + this.authenticationService.token });
        // let options = new RequestOptions({ headers: headers });
        // // get users from api
        // return this.http.get('http://localhost:56702/api/company', options)
        //     .map((response: Response) => response.json())
        //     .subscribe(                
        //         data => this.companies = data,
        //         error => console.log(error)
        //     );  
        this.authHttp.get('http://localhost:56702/api/company')
                    .map((response: Response) => response.json())
                    .subscribe(
                        data => this.companies = data,
                        error=> console.log(error)
                    );                  
    }
}