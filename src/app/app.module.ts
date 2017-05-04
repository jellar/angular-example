import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
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
    HttpModule,
    RouterModule.forRoot([
      {
        path: 'servers',
        component: ServersComponent
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      }
    ])
  ],
  providers: [{provide: ServerDataService, useClass: ServerDataService}],
  bootstrap: [AppComponent]
})
export class AppModule { }
