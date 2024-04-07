import { Component, OnInit } from '@angular/core';

import { PlacesService } from '../places.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  id: string = '';
  data: any;
  currentPlace: any;
  

  constructor(private activateRoute: ActivatedRoute, private placeService: PlacesService){}
  
  
  ngOnInit(): void {
   this.id = this.activateRoute.snapshot.params.id;
   this.getPlace();
  }

  getPlace(){
    this.placeService.getPlaceById(this.id).subscribe( places => {
      this.data = places;
      this.currentPlace = this.data;
    })
  }

  editPlace(event: Event){
    event.preventDefault();
    this.placeService.editPlace(this.id, this.currentPlace).subscribe(place => {
    })
  }



}
