import { Component, OnInit } from '@angular/core';
import { Places } from 'src/app/share/models/Places';
import { PlacesService } from 'src/app/places/places.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  places: Places[] = [];
  constructor(private placesService: PlacesService) { }

  ngOnInit(): void {
    this.placesService.getPlaces().subscribe((place) =>
      this.places = place.sort((a, b) => b.likes - a.likes)
    )
  }

 
}
