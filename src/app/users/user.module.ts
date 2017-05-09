import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { User } from './user';
import { UserService} from './user.service';
import { UsersComponent } from './users.component';
import {UserFormComponent} from './user-form.component';

@NgModule({
  imports: [
    CommonModule   
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