import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateComponent } from './create/create.component';
import { GalleryComponent } from './gallery/gallery.component';
import { DetailsComponent } from './details/details.component';
import { EditComponent } from './edit/edit.component';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchPipe } from '../pipes/search.pipe';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'



@NgModule({
  declarations: [
    CreateComponent,
    GalleryComponent,
    DetailsComponent,
    EditComponent   
  ],
  imports: [
    CommonModule, 
    AppRoutingModule, 
    ReactiveFormsModule, 
    FormsModule,
    
    //Pipe
    SearchPipe,

    BrowserAnimationsModule
  ],
  exports: [
    CreateComponent,
    GalleryComponent,
    DetailsComponent,
    EditComponent
  ]
})
export class PlacesModule { }
