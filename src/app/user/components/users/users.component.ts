import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: any[];

  constructor(private userservice: UserService) {}

  ngOnInit(): void {
    this.userservice.getUser().subscribe(value => this.users = value);
  }

}
