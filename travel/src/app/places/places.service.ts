import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Like, Places } from '../share/models/Places';
import {Comment} from '../share/models/Comment'
import { COMMENT_URL, COMMENT_URL_ADD, PLACES_BY_SEARCH, PLACE_BY_ID_URL, PLACE_CREATE_URL, PLACE_URL } from 'src/constants/url';


@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  constructor(private http: HttpClient) { }

  getPlaces(): Observable<Places[]> {
    return this.http.get<Places[]>(`${PLACE_URL}`);
    
  }
 
  getAllPlacesBySerachPlace(searchPlace: string) {
    return this.http.get<Places[]>(PLACES_BY_SEARCH + searchPlace)
  }

  getPlaceById(id: string): Observable<Places> {
    return this.http.get<Places>(PLACE_BY_ID_URL + id)
  }

  postPlace(place: Places) {
    const payload = place;
    return this.http.post<Places>(PLACE_CREATE_URL, payload)
  }

  editPlace(id: string, place: Places){
    return this.http.put(PLACE_BY_ID_URL + id, place)
  }

  countLikes(id: string, like: Like){
    return this.http.put(PLACE_BY_ID_URL + id, like)
  }

  deletePlace (id: string){
    return this.http.delete(PLACE_BY_ID_URL + id)
  }


  getComments(): Observable<Comment[]>{
    return this.http.get<Comment[]>(COMMENT_URL)
  }

  addComment(email: string, comment: string, placeId: string, ownerId: string){
    return this.http.post<Comment>(COMMENT_URL_ADD, {email, comment, placeId, ownerId})
  }

}
