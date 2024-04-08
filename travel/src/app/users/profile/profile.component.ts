import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Places } from 'src/app/share/models/Places';
import { UserPlacesPipe } from 'src/app/pipes/user-places.pipe';
import { NgForOf} from "@angular/common";
import { RouterLink } from '@angular/router';
import { User } from 'src/app/share/models/Users';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  imports: [UserPlacesPipe, NgForOf, RouterLink],
  standalone: true
})
export class ProfileComponent implements OnInit {

  
  places: Places[] = [];
  user = {} as User;
  userId = localStorage.getItem('userId') as string;

  constructor(private userService: UserService) {}
  
  
  ngOnInit(): void {
    this.userService.getUserById(this.userId).subscribe(user => {
      this.user = user;
    });

    this.userService.getPlacesByUserId().subscribe((places) =>
      this.places = places)
  }
}
