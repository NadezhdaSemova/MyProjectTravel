import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateComponent } from './create/create.component';
import { GalleryComponent } from './gallery/gallery.component';
import { DeleteComponent } from './delete/delete.component';
import { DetailsComponent } from './details/details.component';
import { EditComponent } from './edit/edit.component';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchPipe } from '../pipes/search.pipe';



@NgModule({
  declarations: [
    CreateComponent,
    GalleryComponent,
    DeleteComponent,
    DetailsComponent,
    EditComponent   
  ],
  imports: [
    CommonModule, AppRoutingModule, ReactiveFormsModule, FormsModule,
    //Pipe
    SearchPipe
  ],
  exports: [
    CreateComponent,
    GalleryComponent,
    DeleteComponent,
    DetailsComponent,
    EditComponent
  ]
})
export class PlacesModule { }
