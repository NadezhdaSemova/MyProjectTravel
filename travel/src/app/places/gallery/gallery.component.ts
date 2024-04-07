import { Component } from '@angular/core';

import { Places } from 'src/app/share/models/Places';
import { PlacesService } from '../places.service';


@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent {

  places: Places[] = [];
  searchPlace = ''

  constructor(private placesService: PlacesService) {
  
    this.placesService.getPlaces().subscribe((places) => {
      this.places = places.sort((a, b) => a.place.localeCompare(b.place));
    })
  }

}
