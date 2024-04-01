import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/share/models/Users';
import { UserService } from 'src/app/users/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  user!: User;

  constructor(private userService: UserService, private router: Router) {
    userService.userObservable.subscribe((newUser) =>
      this.user = newUser
    )
  }

  logout() {
    this.userService.logOut();
    this.router.navigate(['/']);
  }

  get isAuth() {
   
    return this.user.email;
  }
}
