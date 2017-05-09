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

  deleteUser(user:User){
       if(confirm("Are you sure you want to delete "+ user.name +"?")){
            var index = this.users.indexOf(user)
			      // Here, with the splice method, we remove 1 object
            // at the given index.
            this.users.splice(index, 1);

            this._userService.deleteUser(user.id)
                .subscribe(null,
                   err => {
                     alert("Could not delete the user.");
                     this.users.splice(index, 0, user);
                   })
       }
  }

}
