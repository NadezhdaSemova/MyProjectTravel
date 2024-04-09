import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PlacesService } from '../places.service';
import { Like, Places } from 'src/app/share/models/Places';
import { NgForm } from '@angular/forms';
import { animate, style, state, trigger } from '@angular/animations'


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
  animations: [
    trigger('commentCard',[
      state('show', 
        style({
          "display": "block",
        }),
      ),
      state('hide', 
      style({
          "display": "none",
        }),
      ),
    ]),
  ],
})
export class DetailsComponent implements OnInit {

  currentPlace = {} as Places;
  placeComments: any;
  currentUserId = localStorage.getItem('userId') as string;
  postOwner = '';
  state = "hide";


  constructor(private placesService: PlacesService, private activatedRout: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const currentPlaceId = this.activatedRout.snapshot.params['id']
    this.placesService.getPlaceById(currentPlaceId).subscribe(place => {
      this.currentPlace = place;
      this.postOwner = place.ownerId as string;
    })

    this.placesService.getComments().subscribe((comment) => {

      this.placeComments = comment.filter(comment => comment.placeId === currentPlaceId);
    })
  }

  reloadPage(): void {
    window.location.reload();
  }

  getLikes() {
    const currentPlaceId = this.activatedRout.snapshot.params['id'];
    let oldLikes = this.currentPlace.likes++;
    const likesNew: number = oldLikes;

    const upgradeLikes: Like = {
      likes: likesNew
    }
    this.placesService.countLikes(currentPlaceId, upgradeLikes).subscribe(() => { })
  }

  showComment(){
    this.state == 'show' ? this.state = "hide" : this.state = "show";
  }

  addComment(form: NgForm) {
    if (form.invalid) {
      return;
    }

    const email = localStorage.getItem('email');
    const ownerId = localStorage.getItem('userId');
    const currentPlaceId = this.activatedRout.snapshot.params['id'];

    const comment = form.value.inputComment;

    this.placesService.addComment(email!, comment, currentPlaceId, ownerId!).subscribe(() => {
    })

    this.reloadPage();
  }

  deleteComment() {
    const currentCommentId = this.placeComments[0]._id;

    this.placesService.deleteComment(currentCommentId).subscribe(() => { })

    this.router.navigateByUrl('/places/')
  }

  deletePlace() {
    const currentPlaceId = this.activatedRout.snapshot.params['id']
    this.placesService.deletePlace(currentPlaceId).subscribe(() => {
      this.router.navigate(['/gallery'])
    })
  }
}
