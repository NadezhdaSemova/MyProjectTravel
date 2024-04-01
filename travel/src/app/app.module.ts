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
import { AppInterceptor } from './app.interceptor';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule,

    //routingModules
    PagesRoutingModule,
    PlacesRoutingModule,
    UserRoutingModule,

    //Modules
    CoreModule,
    PagesModule,
    UsersModule,
    ShareModule,
    PlacesModule
  ],
  providers: [AppInterceptor],
  bootstrap: [AppComponent]
})
export class AppModule { }
