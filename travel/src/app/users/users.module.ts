import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AppRoutingModule } from '../app-routing.module';
import { UserPlacesPipe } from '../pipes/user-places.pipe';
import { PlacesRoutingModule } from '../places/places-router.module';


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule, AppRoutingModule,
    ReactiveFormsModule, 
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: "toast-bottom-right",
      newestOnTop: false
    }),
    BrowserAnimationsModule,

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
