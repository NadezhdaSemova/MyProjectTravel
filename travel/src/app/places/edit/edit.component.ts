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
  place: any;
  

  constructor(private activateRoute: ActivatedRoute, private placeService: PlacesService){}
  
  
  ngOnInit(): void {
   console.log(this.activateRoute.snapshot.params.id);
   this.id = this.activateRoute.snapshot.params.id;
   this.getPlace();
  }

  getPlace(){
    this.placeService.getPlaceById(this.id).subscribe( places => {
      this.data = places;
      this.place = this.data;
    })
  }

  editPlace(){
    this.placeService.editPlace(this.id, this.place).subscribe(place => {

    })
  }



}
