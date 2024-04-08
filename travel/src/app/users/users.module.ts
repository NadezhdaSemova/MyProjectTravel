import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from '../app-routing.module';
import { UserPlacesPipe } from '../pipes/user-places.pipe';
import { PlacesRoutingModule } from '../places/places-router.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule, 
    AppRoutingModule,
    ReactiveFormsModule, 
    
    RouterModule,

    //Pipe
    UserPlacesPipe,
    

    PlacesRoutingModule
    
  ],
  exports: [
    LoginComponent,
    RegisterComponent
  ]
})
export class UsersModule { }
