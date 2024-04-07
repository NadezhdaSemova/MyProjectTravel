import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject, Observable, map, tap } from 'rxjs';
import { PLACE_URL, USER_LOGIN_URL, USER_REGISTER_URL } from 'src/constants/url';
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

  constructor(private http: HttpClient, private toastrService: ToastrService) {
    this.userObservable = this.userSubject.asObservable();

  }

  login(userLogin: IUserLogin): Observable<User> {
    return this.http.post<User>(USER_LOGIN_URL, userLogin).pipe(tap({
      next: (user) => {
        this.setUserToLocalStorage(user);
        this.userSubject.next(user);
        this.toastrService.success(`Let travel together ${user.username}`)
      },
      error: (error) => {
        this.toastrService.error(error.error, "Login is unsuccessful")
      }
    }))
  }

  private setUserToLocalStorage(user: User) {
    
    localStorage.setItem("email", user.email);
    localStorage.setItem("userId", user._id);
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
          this.toastrService.success(
            `Welcome to the Places ${user.username}`,
            'Register Successful'
          )
        },
        error: (errorResponse) => {
          this.toastrService.error(errorResponse.error,
            'Register Failed')
        }
      })
    )
  }

  logOut(): void {

    localStorage.clear();
    window.location.reload();
  }


  getPlacesByUserId(): Observable<Places[]> {
    return this.http.get<Places[]>(PLACE_URL)
  }

}
