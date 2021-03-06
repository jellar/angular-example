import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AuthHttp, AuthConfig, AUTH_PROVIDERS, provideAuth} from 'angular2-jwt';
import { RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { ErrorComponent} from './Error/error.component';
import { SuccessComponent} from './success/success.component';
import { ServerFormComponent } from './server-form/server-form.component';
import { DashboardComponent} from './dashboard/dashboard.component';
import { LoginComponent} from './login/login.component';

/* Shared Service*/
import { ServerDataService } from './data/serversData.service';

/** routes */
import { routing } from './app.routing';
import { usersRouting } from './users/users.routing';
import { postsRouting } from './posts/posts.routing';

/**Users module */
import { UserModule} from './users/user.module';
import { PostsModule} from './posts/posts.module';
import { SharedModule} from './shared/shared.module';

/**auth */
import { AuthGuard } from './auth/auth.guard';
import { AuthenticationService} from './auth/authentication.service'; 

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    ErrorComponent,
    SuccessComponent,
    ServerFormComponent,
    DashboardComponent ,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    routing ,
    usersRouting,
    postsRouting,
    UserModule,
    PostsModule,
    SharedModule
  ],
  providers: [ServerDataService,
               AuthGuard , 
               AuthenticationService,
               AuthHttp,
               provideAuth({
                        headerName: 'Authorization',
                        headerPrefix: 'bearer',
                        tokenName: 'token',
                        tokenGetter: (() => JSON.parse(localStorage.getItem('currentUser')).token),
                        globalHeaders: [{ 'Content-Type': 'application/json' }],
                        noJwtError: true
                    }) 
        ],
  bootstrap: [AppComponent]
})
export class AppModule { }
