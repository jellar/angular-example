import { ServersComponent} from './servers/servers.component';
import { DashboardComponent} from './dashboard/dashboard.component';

export const appRoutes = [   
    {
    path: 'servers',
    component: ServersComponent
    },
    {
    path: 'dashboard',
    component: DashboardComponent
    }  
]


