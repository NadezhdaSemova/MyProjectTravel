import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  isSubmitted: boolean = false;

  constructor(private fb: FormBuilder, private userService: UserService, private router: Router) {}
    
  
  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email:['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    })
  }
  

  submit(){
    this.isSubmitted = true;
    if(this.loginForm.invalid) return;

      this.userService.login({email:this.loginForm.controls.email.value, password: this.loginForm.controls.password.value}).subscribe(() =>{
        this.router.navigate(['']);
      });
  }
  logout() {
    this.userService.logOut();
  }
}
