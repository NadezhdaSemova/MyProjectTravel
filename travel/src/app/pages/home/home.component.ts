import { Component, OnInit } from '@angular/core';
import { PagesService } from '../pages.service';
import { Places } from 'src/app/share/models/Places';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  places: Places[] = [];
  constructor(private placesService: PagesService) { }

  ngOnInit(): void {
    this.placesService.getPlaces().subscribe((place) =>
      this.places = place.sort((a, b) => b.likes - a.likes)
    )
  }
}
