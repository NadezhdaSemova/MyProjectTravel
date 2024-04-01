import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { GalleryComponent } from './gallery/gallery.component';
import { CreateComponent } from './create/create.component';


const routes: Routes = [
  {path: 'gallery', component: GalleryComponent},
   {path: 'places/:id', component: DetailsComponent},
   {path: 'search/:searchPlace', component: GalleryComponent},
   {path: 'add/place', component: CreateComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlacesRoutingModule { }