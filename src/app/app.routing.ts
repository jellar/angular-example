import { RouterModule} from '@angular/router';

import { ServersComponent} from './servers/servers.component';
import { DashboardComponent} from './dashboard/dashboard.component';

export const routing = RouterModule.forRoot([
    {
    path: 'servers',
    component: ServersComponent
    },
    {
    path: 'dashboard',
    component: DashboardComponent
    }
]);