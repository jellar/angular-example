import { Injectable } from '@angular/core';
import { Http , Headers,RequestOptions, Response,RequestMethod } from '@angular/http';
import { tokenNotExpired } from 'angular2-jwt';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'

@Injectable()
export class AuthenticationService {    
    public token: string;
    
    constructor(private http: Http){
        // set token if saved in the local storage
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.token = currentUser && currentUser.token;
    }

    login(username:string, password: string): Observable<boolean>{
        let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        let options = new RequestOptions({ method: RequestMethod.Post, headers: headers });       
        let credentials = "grant_type=password&username="+ encodeURIComponent(username)+"&password="+ encodeURIComponent(password);
        return this.http.post('http://localhost:56702/oauth/token',credentials)
            .map((response: Response)=> {                
                //login successful if there's a jwt token in the response
                let token = response.json() && response.json().access_token;               
                if(token){
                    // set token property
                    this.token = token;

                    //store username and jwt token in local storage to keep user logged 
                    //in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify({username: username, token: token}));

                    //return true to indicate successful login
                    return true;
                }
                else{
                    //return false to indicare failed login
                    return false;
                }
            });
    }

    logout(): void{
        // clear token remove user from local storage to log user out
        this.token = null; 
        localStorage.removeItem('currentUser');
    }

    loggedIn(){        
        return tokenNotExpired('currentUser');
    }
}