import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Places } from '../share/models/Places';
import { PLACES_BY_SEARCH, PLACE_BY_ID_URL, PLACE_CREATE_URL, PLACE_URL } from 'src/constants/url';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  constructor(private http: HttpClient) { }

  getPlaces(): Observable<Places[]>{
    return this.http.get<Places[]>(`${PLACE_URL}`);
  }

  getAllPlacesBySerachPlace(searchPlace: string){
    return this.http.get<Places[]>(PLACES_BY_SEARCH + searchPlace)
  }

  getPlaceById(id: string): Observable<Places>{
    return this.http.get<Places>(PLACE_BY_ID_URL + id)
  }

  postPlace(place: Places){
    const payload = place;
    return this.http.post<Places>(PLACE_CREATE_URL, payload)
  }

  

  
}
