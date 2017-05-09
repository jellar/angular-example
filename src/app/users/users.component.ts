import { Component, OnInit } from '@angular/core';

import { UserService } from './user.service';
import { User } from './user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[];

  constructor(private _userService: UserService) { }

  ngOnInit() {
    this._userService.getUsers().subscribe(users => this.users = users);  
  }

}
