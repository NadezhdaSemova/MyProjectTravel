import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { PasswordMatchValidators } from 'src/app/validators/password_validator';
import { IUserRegister } from 'src/app/share/models/Users';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm!: FormGroup;
  isSubmitted!: boolean;

  returnUrl = '';

  constructor(private fb: FormBuilder, private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(4)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(5)]],
      repeatPassword: ['', [Validators.required]]
    }, {
      validators: PasswordMatchValidators('password', 'repeatPassword')
    });
    
  }

  get fc() {
    return  this.registerForm.controls;
  }

  submit(){
    this.isSubmitted = true;
    if(this.registerForm.invalid) return;

    const fv = this.registerForm.value;
    const user: IUserRegister = {
      username: fv.username,
      email: fv.email,
      password: fv.password,
      repeatPassword: fv.repeatPassword
    };

    this.userService.register(user).subscribe(_ => {
      this.router.navigate(['/'])
    })
  }
}
