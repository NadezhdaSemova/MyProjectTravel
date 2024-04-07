import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';
import { ContactsComponent } from './contacts/contacts.component';
import { AboutComponent } from './about/about.component';
import { AppRoutingModule } from '../app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HomeComponent,
    ErrorComponent,
    ContactsComponent,
    AboutComponent
  ],
  imports: [
    CommonModule, AppRoutingModule, ReactiveFormsModule
  ],
  exports: [
    HomeComponent,
    ErrorComponent,
    ContactsComponent,
    AboutComponent,
  ]
})
export class PagesModule { }
