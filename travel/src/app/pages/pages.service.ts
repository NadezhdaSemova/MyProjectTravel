import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Places } from '../share/models/Places';
import { CONTACT_URL, PLACE_URL } from 'src/constants/url';
import { Contact } from '../share/models/Contact';

@Injectable({
  providedIn: 'root'
})
export class PagesService {



  constructor(private http: HttpClient) {}

  getContact(contactForm: Contact){
    const payload = contactForm;
    return this.http.post<Contact>(CONTACT_URL, payload)
  }

  
}
