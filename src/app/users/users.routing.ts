import { RouterModule} from '@angular/router';
import { UsersComponent} from './users.component';
import {UserFormComponent} from './user-form.component';
import { AuthGuard } from '../auth/auth.guard';
export const usersRouting = RouterModule.forRoot([
    {
        path: 'users/:id',
        component: UserFormComponent,
        canActivate: [AuthGuard]
    },
    {
        path:'users/new',
        component: UserFormComponent,
        canActivate: [AuthGuard]
    },
    {
        path:'users',
        component: UsersComponent,
        canActivate: [AuthGuard]
    }
]);
