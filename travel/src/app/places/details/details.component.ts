import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlacesService } from '../places.service';
import { Places } from 'src/app/share/models/Places';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  currentPlace = {} as Places;
  currentUserId = localStorage.getItem('userId') as string;
  postOwner = '';
  

  constructor(private placesService: PlacesService, private activatedRout: ActivatedRoute) { }

  ngOnInit(): void {
    const currentPlaceId = this.activatedRout.snapshot.params['id']
    this.placesService.getPlaceById(currentPlaceId).subscribe(place => {
      this.currentPlace = place
      this.postOwner = place.ownerId as string;
      console.log(this.postOwner)
      console.log(this.currentUserId)
    }
    )
  }
}
