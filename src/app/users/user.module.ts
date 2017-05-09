import { NgModule } from '@angular/core';
import { CommonModule }        from '@angular/common';
import { FormsModule, 
         ReactiveFormsModule } from '@angular/forms';
import { RouterModule }        from '@angular/router';
import { HttpModule }          from '@angular/http';

import { User } from './user';
import { UserService} from './user.service';
import { UsersComponent } from './users.component';
import { UserFormComponent} from './user-form.component';

@NgModule({
  imports: [
    CommonModule ,
     FormsModule,
        ReactiveFormsModule,
        RouterModule,
        HttpModule  
  ],
  declarations: [
      UsersComponent,
      UserFormComponent
      ],
  exports: [
      UsersComponent,
      UserFormComponent
    ],
  providers:[
      UserService
    ]
})
export class UserModule { }