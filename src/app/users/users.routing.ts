import { RouterModule} from '@angular/router';
import { UsersComponent} from './users.component';
import {UserFormComponent} from './user-form.component';

export const usersRouting = RouterModule.forRoot([
    {
        path: 'users/:id',
        component: UserFormComponent
    },
    {
        path:'users/new',
        component: UserFormComponent
    },
    {
        path:'users',
        component: UsersComponent
    }
]);
