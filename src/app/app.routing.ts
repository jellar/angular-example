import { RouterModule} from '@angular/router';

import { ServersComponent} from './servers/servers.component';
import { DashboardComponent} from './dashboard/dashboard.component';
import { LoginComponent} from './login/login.component';
import { AuthGuard } from './auth/auth.guard';

export const routing = RouterModule.forRoot([
    {
    path: 'servers',
    component: ServersComponent,
    canActivate : [AuthGuard]
    },
    {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate : [AuthGuard]
    },
    {
    path: '',
    component: DashboardComponent,
    canActivate : [AuthGuard]
    },
    {   
    path: 'login',
    component: LoginComponent
    }
]);