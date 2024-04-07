import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { GalleryComponent } from './gallery/gallery.component';
import { CreateComponent } from './create/create.component';
import { AuthActivate } from '../guard/auth.activate';
import { EditComponent } from './edit/edit.component';


const routes: Routes = [
  {path: 'gallery', component: GalleryComponent,canActivate: [AuthActivate]},
   {path: 'places/:id', component: DetailsComponent,canActivate: [AuthActivate]},
   {path: 'edit/:id', component: EditComponent},
   {path: 'add', component: CreateComponent,canActivate: [AuthActivate]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlacesRoutingModule { }