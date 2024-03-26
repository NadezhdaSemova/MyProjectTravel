import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateComponent } from './create/create.component';
import { GalleryComponent } from './gallery/gallery.component';
import { DeleteComponent } from './delete/delete.component';
import { DetailsComponent } from './details/details.component';
import { EditComponent } from './edit/edit.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';
import { SearchComponent } from './search/search.component';



@NgModule({
  declarations: [
    CreateComponent,
    GalleryComponent,
    DeleteComponent,
    DetailsComponent,
    EditComponent, 
    SearchComponent
  ],
  imports: [
    CommonModule, AppRoutingModule
  ],
  exports: [
    CreateComponent,
    GalleryComponent,
    DeleteComponent,
    DetailsComponent,
    EditComponent,
    SearchComponent
  ]
})
export class PlacesModule { }
