import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable, tap } from 'rxjs';
import { PLACE_URL, USER_GET, USER_LOGIN_URL, USER_REGISTER_URL } from 'src/constants/url';
import { IUserLogin, IUserRegister, UserForAuthentication } from '../share/models/Users';
import { User } from '../share/models/Users';
import { Places } from '../share/models/Places';



@Injectable({
  providedIn: 'root'
})
export class UserService {
  user: UserForAuthentication | undefined;

  get isLoggedIn(): boolean {
    return !!localStorage.getItem('user')
  }

  USER_KEY = 'user';

  private userSubject = new BehaviorSubject<User>(this.getUserFromLocalStorage());
  public userObservable: Observable<User>;

  constructor(private http: HttpClient) {
    this.userObservable = this.userSubject.asObservable();

  }

  login(userLogin: IUserLogin): Observable<User> {
    return this.http.post<User>(USER_LOGIN_URL, userLogin).pipe(tap({
      next: (user) => {
        this.setUserToLocalStorage(user);
        this.userSubject.next(user);
        
      },
      error: (error) => {
        console.log(error.error, "Login is unsuccessful")
      }
    }))
  }

  private setUserToLocalStorage(user: User) {
    
    localStorage.setItem("email", user.email);
    localStorage.setItem("userId", user._id);
    localStorage.setItem("token", user.token);
    localStorage.setItem(this.USER_KEY, JSON.stringify(user));
  }

  private getUserFromLocalStorage(): User {
    const userJson = localStorage.getItem(this.USER_KEY);
    if (userJson) return JSON.parse(userJson) as User;
    return new User();
  }

  register(userRegiser: IUserRegister): Observable<User> {
    return this.http.post<User>(USER_REGISTER_URL, userRegiser).pipe(
      tap({
        next: (user) => {
          this.setUserToLocalStorage(user);
          this.userSubject.next(user);
          console.log(
            `Welcome to the Places ${user.username}`,
            'Register Successful'
          )
        },
        error: (errorResponse) => {
         console.log(errorResponse.error,
            'Register Failed')
        }
      })
    )
  }

  logOut(): void {

    localStorage.clear();
    window.location.reload();
  }

  getUserById(userId: string):Observable<User>{
    return this.http.get<User>(USER_GET + userId)
  }

  getPlacesByUserId(): Observable<Places[]> {
    return this.http.get<Places[]>(PLACE_URL)
  }

}
