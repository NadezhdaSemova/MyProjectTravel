import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GalleryComponent } from './places/gallery/gallery.component';
import { ErrorComponent } from './pages/error/error.component';

const routes: Routes = [
  {path: '**', redirectTo: '/404'},
    {path: '404', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
