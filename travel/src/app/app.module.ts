import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router'
import { CoreModule } from './core/core.module';
import { PagesModule } from './pages/pages.module';
import { UsersModule } from './users/users.module';
import { ShareModule } from './share/share.module';
import { PlacesModule } from './places/places.module';
import { PagesRoutingModule } from './pages/pages-routing.modules';
import { PlacesRoutingModule } from './places/places-router.module';
import { UserRoutingModule } from './users/users-router.module';

import { ToastrModule } from 'ngx-toastr';
import { FormsModule } from '@angular/forms';





@NgModule({
  declarations: [
    AppComponent,
    
   
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule,
    FormsModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
    }),

    //routingModules
    PagesRoutingModule,
    PlacesRoutingModule,
    UserRoutingModule,

    //Modules
    CoreModule,
    PagesModule,
    UsersModule,
    ShareModule,
    PlacesModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
