import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UserComponent} from './components/user/user.component';
import {UsersComponent} from './components/users/users.component';

const routes: Routes = [
  {
    // users
    path: '', component: UsersComponent, children: [
      {
        // users/id
        path: ':id', component: UserComponent
      }
    ]

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
