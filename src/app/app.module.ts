import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule} from '@angular/router';


import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { ErrorComponent} from './Error/error.component';
import { SuccessComponent} from './success/success.component';
import { ServerFormComponent } from './server-form/server-form.component';
import { DashboardComponent} from './dashboard/dashboard.component';

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

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    ErrorComponent,
    SuccessComponent,
    ServerFormComponent,
    DashboardComponent 
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
  providers: [{provide: ServerDataService, useClass: ServerDataService}],
  bootstrap: [AppComponent]
})
export class AppModule { }
