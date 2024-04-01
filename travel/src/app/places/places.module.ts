import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateComponent } from './create/create.component';
import { GalleryComponent } from './gallery/gallery.component';
import { DeleteComponent } from './delete/delete.component';
import { DetailsComponent } from './details/details.component';
import { EditComponent } from './edit/edit.component';
import { AppRoutingModule } from '../app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CreateComponent,
    GalleryComponent,
    DeleteComponent,
    DetailsComponent,
    EditComponent   
  ],
  imports: [
    CommonModule, AppRoutingModule, ReactiveFormsModule
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
