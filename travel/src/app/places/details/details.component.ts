import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PlacesService } from '../places.service';
import { Like, Places } from 'src/app/share/models/Places';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  currentPlace = {} as Places;
  currentUserId = localStorage.getItem('userId') as string;
  postOwner = '';
  
  

  constructor(private placesService: PlacesService, private activatedRout: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const currentPlaceId = this.activatedRout.snapshot.params['id']
    this.placesService.getPlaceById(currentPlaceId).subscribe(place => {
      this.currentPlace = place;
      this.postOwner = place.ownerId as string;
    }
    )
  }

  getLikes(){
    const currentPlaceId = this.activatedRout.snapshot.params['id']
    let oldLikes = this.currentPlace.likes;
   const likesNew: any = oldLikes.push(this.currentUserId);

    const upgradeLikes: any  ={
      likes: likesNew
    }
    this.placesService.countLikes(currentPlaceId, upgradeLikes).subscribe(() =>{})
  }
 
  deletePlace(){
    const currentPlaceId = this.activatedRout.snapshot.params['id']
    this.placesService.deletePlace(currentPlaceId).subscribe( () => {
      this.router.navigate(['/gallery'])
    })
  }
}
