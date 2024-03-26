import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit{

  searchPlace = '';

  constructor(activatedRoute: ActivatedRoute, private router: Router){
    activatedRoute.params.subscribe((params) => {
      if(params.searchPlace) 
      this.searchPlace = params.searchPlace;
    });
  }

  ngOnInit(): void {
   
  }
  search(place: string): void {
    if(place){
      this.router.navigate(['/search/' + place])
    }

  }
}
