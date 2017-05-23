import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from '../auth/authentication.service';

@Component({
    selector:'login',
    templateUrl: 'login.component.html'
})

export class LoginComponent implements OnInit{
    model: any = {};
    error = '';
    loading = false; 

    constructor(private auth: AuthenticationService, private router: Router){

    }

    ngOnInit(){
        // reset login status
        this.auth.logout();
    }

    login(){
        this.loading = true;
        this.auth.login(this.model.username, this.model.password)
                .subscribe(result => {
                    console.log(result);
                    if(result === true){
                        this.router.navigate(['/']);
                    }
                    else{
                        this.error = 'username or password is incorrect';
                          this.loading = false;
                    }
                });
    }
}