import { ServersComponent} from './servers/servers.component';
import { DashboardComponent} from './dashboard/dashboard.component';

export const appRoutes = [
    {name: 'servers', url: '/servers', component: ServersComponent},
    {name: 'dashboard', url: '/dashboard', component: ServersComponent},
]


