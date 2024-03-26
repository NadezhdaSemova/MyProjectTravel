
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


import { Places } from 'src/app/share/models/Places';
import { PlacesService } from '../places.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent {

  places: Places[] = [];

  constructor(private placesService: PlacesService, activateRoute: ActivatedRoute) {
    let placeObservable: Observable<Places[]>;
    activateRoute.params.subscribe((params) => {
      if (params.searchPlace) {
        placeObservable = this.placesService.getAllPlacesBySerachPlace(params.searchPlace);
      }
      else {
        placeObservable = this.placesService.getPlaces();
      }

      placeObservable.subscribe((places) =>{
        this.places = places
      })
    })
  }
}
