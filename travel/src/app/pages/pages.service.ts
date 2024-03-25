import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Places } from '../share/models/Places';
import { PLACE_URL } from 'src/constants/url';

@Injectable({
  providedIn: 'root'
})
export class PagesService {



  constructor(private http: HttpClient) {}

  getPlaces(): Observable<Places[]>{
    
    return this.http.get<Places[]>(`${PLACE_URL}`);
  }

  getToThreePlaces(): Observable<Places[]>{
    return this.http.get<Places[]>(PLACE_URL);
  }

  
}
