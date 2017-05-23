
import { RouterModule  }     from '@angular/router';

import { PostsComponent }    from './posts.component';
import { AuthGuard } from '../auth/auth.guard';
export const postsRouting = RouterModule.forChild([
    { path: 'posts', component: PostsComponent, canActivate: [AuthGuard] }
]);