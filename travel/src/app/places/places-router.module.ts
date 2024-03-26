import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { GalleryComponent } from './gallery/gallery.component';


const routes: Routes = [
  {path: 'gallery', component: GalleryComponent},
   {path: 'places/:id', component: DetailsComponent},
   {path: 'search/:searchPlace', component: GalleryComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlacesRoutingModule { }